import {NgModule} from '@angular/core';
import { GorillaSoftPipeModule } from './pipe/pipe.module';
import { GorillaSoftDirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [
  ],
  imports:[
    GorillaSoftPipeModule,
    GorillaSoftDirectiveModule,
  ],
  exports: [
    GorillaSoftPipeModule,
    GorillaSoftDirectiveModule,
  ],
})
export class GorillaSoftModule{}