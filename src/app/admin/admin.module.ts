import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { TimetableofclassesComponent } from './timetableofclasses/timetableofclasses.component';
import { UpcomingexamsComponent } from './upcomingexams/upcomingexams.component';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [AdminComponent, AttendanceComponent, MarksComponent, TimetableofclassesComponent, UpcomingexamsComponent, UpcomingeventsComponent, ReportsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
