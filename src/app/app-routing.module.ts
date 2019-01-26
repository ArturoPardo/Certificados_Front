import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import {  ViewLoginComponent} from './view-login/view-login.component';
import {  ViewRegisterComponent} from './view-register/view-register.component';
const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'login',
    component:ViewLoginComponent
  },
  {
    path: 'register',
    component: ViewRegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
