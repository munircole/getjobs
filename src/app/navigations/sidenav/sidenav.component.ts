import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css',
          './sidenav.component-theme.scss'
]
})
export class SidenavComponent implements OnInit {
  @Output() SideNavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onToggleClose(){
    this.SideNavClose.emit();
   }
   
}
