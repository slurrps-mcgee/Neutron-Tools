import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

//Pages
import { HomeComponent } from './home/home.component';
import { PasswordgeneratorComponent } from './passwordgenerator/passwordgenerator.component';

//Services
import { APIService } from './shared/services/apiservice';

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
    NgbModule,
    HttpClientModule
  ],
  providers: [ APIService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
