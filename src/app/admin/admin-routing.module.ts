import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { ReportsComponent } from './reports/reports.component';
import { TimetableofclassesComponent } from './timetableofclasses/timetableofclasses.component';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component';
import { UpcomingexamsComponent } from './upcomingexams/upcomingexams.component';

const routes: Routes = [
  { path: '', component:AdminComponent,
  children:[
    { path: 'attend', component: AttendanceComponent },
    { path: 'marks', component: MarksComponent },
    { path: 'time', component: TimetableofclassesComponent },
    { path: 'exams', component: UpcomingexamsComponent },
    { path: 'events', component: UpcomingeventsComponent },
    { path: 'reports', component: ReportsComponent }
  ]
 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
