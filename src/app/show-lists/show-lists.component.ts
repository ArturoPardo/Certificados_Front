import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models.interface';
// ---recibimos lista de la interface
@Component({
  selector: 'app-show-lists',
  templateUrl: './show-lists.component.html',
  styleUrls: ['./show-lists.component.css']
})
export class ShowListsComponent implements OnInit {
  @Input() lists: Array<List>;
 
  // ---recibimos lista
  constructor() { }

  ngOnInit() {
    console.log('show list',this.lists);
  }

}
