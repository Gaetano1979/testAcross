import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEditUserRoutingModule } from './view-edit-user-routing.module';
import { ViewEditUserComponent } from './view-edit-user.component';


@NgModule({
  declarations: [ViewEditUserComponent],
  imports: [
    CommonModule,
    ViewEditUserRoutingModule
  ]
})
export class ViewEditUserModule { }
