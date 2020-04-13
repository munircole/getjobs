import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/dashboard/jobs', title: 'Jobs',  icon:'ni-planet text-blue', class: '' },
    { path: '/dashboard/applications', title: 'Applications',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/dashboard/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/dashboard/send-mail', title: 'Send Mail', icon:'', class:''},
    { path: '/dashboard/sms', title: 'Send SMS', icon: '', class: ''},
    { path: '/dashboard/interview', title: 'Interview', icon: '', class: ''},
    { path: '/dashboard/post-ads', title: 'Post-ads', icon: '', class: ''},
    { path: '/dashboard/billing', title: 'Billing', icon: '', class: ''},
];

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

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
