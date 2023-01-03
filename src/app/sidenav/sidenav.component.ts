import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

//TODO: add ability to use without app bar

export class SidenavComponent {
  @Input() isExpanded: boolean = false; //Used to handle sidebar expansion
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>(); //outputs value when sidebar toggle boolean

  //Handles sidebar expansion toggle
  handleSidebarToggle() {
    //Will only run when sidebar is already expanded
    if(this.isExpanded === true) {
      this.isExpanded = !this.isExpanded;
      this.toggleSidebar.emit(this.isExpanded);
    }
  };
}
