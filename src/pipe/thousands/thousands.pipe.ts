import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000000';

@Pipe({ name: 'thousandsPipe'})
export class ThousandsPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    this.DECIMAL_SEPARATOR = '.';
    this.THOUSANDS_SEPARATOR = ',';
  }

  transform(value: number | string | undefined, fractionSize: number = 2): string {
    if (value !== undefined) {
      let [ integer, fraction = '' ] = (value || '').toString().split(this.DECIMAL_SEPARATOR);

      fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : '';

      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

      return integer + fraction;
    } else {
      return '';
    }
  }

  parse(value: string | undefined, fractionSize: number = 2): string {
    if (value !== undefined) {
      let [ integer, fraction = '' ] = (value || '').split(this.DECIMAL_SEPARATOR);

      integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');

      fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
        ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
        : '';

      return integer + fraction;
    } else {
      return '';
    }
  }

}
