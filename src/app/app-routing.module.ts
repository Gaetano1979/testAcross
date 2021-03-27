import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' , loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  { path: 'search-users', loadChildren: () => import('./modules/search-users/search-users.module').then(m => m.SearchUsersModule) },
  { path: 'view-edit-user', loadChildren: () => import('./modules/view-edit-user/view-edit-user.module').then(m => m.ViewEditUserModule) },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
