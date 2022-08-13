import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';

import { TeacherComponent } from './teacher.component';
import { TimetableofclassesComponent } from './timetableofclasses/timetableofclasses.component';

const routes: Routes = [
  { path: '', component: TeacherComponent ,
  children:[
    { path: 'attend', component: AttendanceComponent },
    { path: 'marks', component: MarksComponent },
    { path: 'time', component: TimetableofclassesComponent },
  ]
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
