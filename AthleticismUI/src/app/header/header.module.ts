import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    MainHeaderComponent,
    NavbarMenuComponent
  ],
  exports: [
    MainHeaderComponent,
    NavbarMenuComponent
  ],
})
export class HeaderModule { }
