import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [CommonModule],
})
export class DfmCommonModule {}
