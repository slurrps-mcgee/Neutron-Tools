import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarExpanded = false;
  toggleMenu = () => this.sidebarExpanded = !this.sidebarExpanded;
  
}
