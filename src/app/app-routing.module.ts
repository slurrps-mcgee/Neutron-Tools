import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PasswordgeneratorComponent } from './passwordgenerator/passwordgenerator.component';

const routes: Routes = [
  { 
    path: '', 
    
    pathMatch: 'full', 
    redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'passwordgenerator',
    component: PasswordgeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
