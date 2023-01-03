import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppbarComponent } from './appbar/appbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { PasswordgeneratorComponent } from './passwordgenerator/passwordgenerator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SidenavComponent,
    HomeComponent,
    PasswordgeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
