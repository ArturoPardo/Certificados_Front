import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { MapaComponent } from './mapa/mapa.component';
const routes: Routes = [
{path:'', component: BoardComponent},
{path:'mapa', component: MapaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
