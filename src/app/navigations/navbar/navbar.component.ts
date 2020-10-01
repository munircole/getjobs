import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
              './navbar.component.scss'
            ]
})
export class NavbarComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onToggleOpenSidenav(){
    this.SideNavigationToggle.emit();
  }

  get isLogedIn(){
    return this.auth.isLoggedIn();
  }


  logout(){
    this.auth.doLogout();

  }
}
