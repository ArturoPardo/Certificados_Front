import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  login:boolean=false;
  register:boolean=false;
mostrarLogin(){
  console.log("aqui");
  this.login=true;
  this.register=false;
}
mostrarRegister(){
  console.log("aqui");
  this.register=true;
  this.login=false;
}
  constructor() { }

  ngOnInit() {
  }

}
