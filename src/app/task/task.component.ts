import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  constructor() { }

  ngOnInit() {
  }

}
