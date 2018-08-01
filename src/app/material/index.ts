import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule
  ],
  imports: [
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule
  ]
})
export class DmsMaterialModule {}
