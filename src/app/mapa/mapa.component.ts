import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  data:boolean=false;
mostrar(){
  console.log("aqui");
  this.data=!this.data;
}
  constructor() { }

  ngOnInit() {
  }

}
