import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrashComponent } from './pages/trash/trash.component';
import { SharedWithMeComponent } from './pages/shared-with-me/shared-with-me.component';
import { SharedByMeComponent } from './pages/shared-by-me/shared-by-me.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent 
  },
  {
    path: 'my-files',
    component: DashboardComponent
  },
  {
    path: 'trash',
    component: TrashComponent
  },
  {
    path: 'shared-with-me',
    component: SharedWithMeComponent
  },
  {
    path: 'shared-by-me',
    component: SharedByMeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
