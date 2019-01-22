import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Data } from '../models.interface';
import { Task } from '../models.interface';
// ----importo esta DataMan y data
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  data: Data;
  task: Task;
  // registro data
  constructor(private dataManager: DataManagerService) { }

  ngOnInit() {
    this.data = this.dataManager.getData();
    console.log(this.data);
    
   
    console.log(this.task);
    // este dato
  }

}
