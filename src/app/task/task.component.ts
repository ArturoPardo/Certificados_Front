import { Component, OnInit, Input } from '@angular/core';
import { Task, List } from '../models.interface';

import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() list: List;
  editing:boolean =true;
  constructor(private dataService: DataManagerService) { }




  delete() {
    if (confirm('Do you really want to delete the task ' + this.task.text)) {
      console.log(this.task.taskId);
      console.log(this.task);
      this.dataService.deleteTask(this.task);
    }
    
  }

 removerTask() {
  console.log(this.task.text);
  this.editing=false;
  console.log(this.editing);
    
  }
  addTask(ev){
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewTask(ev.target.value.trim(), this.list);
      console.log(ev.target.value);
      console.log(this.list.listId);
      ev.target.value = '';
      
    }
   
  }

  removertaskGlobal(ev){
   
    if (ev.target.value.trim() !== '') {
      console.log(ev.target.value);
      console.log(this.task.text);
      this.dataService.removertaskGlobal2(ev.target.value.trim(), this.task);
      ev.target.value = '';
      this.editing=true;
    }
    
      console.log("llego");
   


      
      }



  ngOnInit() {
  }

}
