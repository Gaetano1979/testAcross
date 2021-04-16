import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEditUserRoutingModule } from './view-edit-user-routing.module';
import { ViewEditUserComponent } from './view-edit-user.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ViewEditUserComponent],
    imports: [
        CommonModule,
        ViewEditUserRoutingModule,
        ReactiveFormsModule
    ]
})
export class ViewEditUserModule { }
