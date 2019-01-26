import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { ShowListsComponent } from './show-lists/show-lists.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { TaskComponent } from './task/task.component';
import { MapaComponent } from './mapa/mapa.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    ShowListsComponent,
    AddNewListComponent,
    TaskComponent,
    MapaComponent,
    ViewLoginComponent,
    ViewRegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
