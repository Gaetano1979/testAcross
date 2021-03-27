import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEditUserComponent } from './view-edit-user.component';

const routes: Routes = [{ path: '', component: ViewEditUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEditUserRoutingModule { }
