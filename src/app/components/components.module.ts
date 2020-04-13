import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSidebarComponent } from './sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './navbar/dashboard-navbar.component';
import { DashboardFooterComponent } from './footer/dashboard-footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    DashboardFooterComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent
  ],
  exports: [
    DashboardFooterComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent
  ]
})
export class ComponentsModule { }
