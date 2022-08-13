import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { TimetableofclassesComponent } from './timetableofclasses/timetableofclasses.component';


@NgModule({
  declarations: [ParentComponent, AttendanceComponent, MarksComponent, TimetableofclassesComponent],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
