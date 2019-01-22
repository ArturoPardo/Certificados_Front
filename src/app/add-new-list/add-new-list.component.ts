import { Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
// ----importamos el servicio

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css']
})
export class AddNewListComponent {
 
  constructor(private dataService: DataManagerService) { }

  addList(ev) {
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewList(ev.target.value.trim());
      console.log(ev.target.value);
      ev.target.value = '';
      
    }
  }

// ---el  onit nos lo cargamos
}
