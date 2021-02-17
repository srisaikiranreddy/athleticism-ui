import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataService } from './data/data.service';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UiModule } from './ui/ui.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavbarMenuComponent } from './header/navbar-menu/navbar-menu.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    UiModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    NavbarMenuComponent
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
