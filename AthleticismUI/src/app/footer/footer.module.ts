import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainFooterComponent,
  ],
  exports: [
    MainFooterComponent,
  ],
})
export class FooterModule {
}