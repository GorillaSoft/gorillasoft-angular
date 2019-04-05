import { NgModule } from '@angular/core';
import { ThousandsPipe } from './thousands/thousands.pipe';

@NgModule({
  declarations: [
    ThousandsPipe,
  ],
  exports: [
    ThousandsPipe,
  ],
})
export class GorillaSoftPipeModule {
}
