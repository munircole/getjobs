import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
              './navbar.component.scss'
            ]
})
export class NavbarComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleOpenSidenav(){
    this.SideNavigationToggle.emit();
  }

}
