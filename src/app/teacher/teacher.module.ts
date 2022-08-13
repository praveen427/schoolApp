import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { TimetableofclassesComponent } from './timetableofclasses/timetableofclasses.component';


@NgModule({
  declarations: [TeacherComponent, AttendanceComponent, MarksComponent, TimetableofclassesComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
