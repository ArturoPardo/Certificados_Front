import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input() list: List;
variable:boolean = false;
variablelist:boolean = false;
  constructor(private dataService: DataManagerService) { }

  delete() {
    if (confirm('Do you really want to delete the list ' + this.list.name)) {
      this.dataService.deleteList(this.list.listId);
    }
    
  }

  mostrarlist() {
   this.variablelist=true;
    console.log(this.variablelist);
  }
  removelistName(ev){
    console.log('esto es'+this.list.name);
    if (ev.target.value.trim() !== '') {
      this.dataService.removerNombre(ev.target.value.trim(), this.list);
      console.log(ev.target.value);
      console.log(this.list.name);
      ev.target.value = '';
      this.variablelist = false;
      
    }
  
  }
mostrar(){
console.log("muestro");
this.variable= true;
console.log(this.variable);
}

  
  addTask(ev){
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewTask(ev.target.value.trim(), this.list);
      console.log(ev.target.value);
      console.log(this.list.listId);
      ev.target.value = '';
      
    }
   
  }


}

