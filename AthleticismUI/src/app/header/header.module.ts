import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MainHeaderComponent
  ],
  exports: [
    MainHeaderComponent
  ],
})
export class HeaderModule {
}
