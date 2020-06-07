import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/connect', title: 'Posts',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/connect//discussions/topics/general', title: 'Forum',  icon:'ni-planet text-blue', class: '' },
    { path: '/connet', title: 'Chatroom',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/connect', title: 'Private Chat',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/connect', title: ' Members Online', icon:'', class:''},
    { path: '/connect', title: ' Top members', icon:'', class:''},

];

@Component({
  selector: 'connect-sidebar',
  templateUrl: './connect-sidebar.component.html',
  styleUrls: ['./connect-sidebar.component.css']
})
export class ConnectSidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
