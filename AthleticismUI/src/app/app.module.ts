import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarMenuComponent } from './header/navbar-menu/navbar-menu.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [
    AppComponent,    
    NavbarMenuComponent    
  ],
  providers: [    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}