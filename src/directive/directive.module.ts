import { NgModule } from '@angular/core';
import { BlockCopyPasteDirective } from './block-copy-paste/block-copy-paste.directive';

@NgModule({
  declarations: [
    BlockCopyPasteDirective,
  ],
  exports: [
    BlockCopyPasteDirective,
  ],
})
export class GorillaSoftDirectiveModule {
}
