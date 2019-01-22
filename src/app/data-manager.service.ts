import { Injectable } from '@angular/core';
import { List, Task } from './models.interface';

// importamos la list, lo del data vemos despues
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
 data:{ lists: Array<List> }={

  lists: [
    {
   
      listId: 0,
      createdAt: new Date(),
      modifiedAt: new Date(),
      name: 'to do',
      tasks: [
        {
          listId: 0,
          taskId: 0,
          text: 'aprender angular',
          completed: false,
          color: 'white',
          createdAt: new Date(),
          modifiedAt: new Date(),
        },
        {
          listId: 0,
            taskId: 1,
            text: 'aprender js',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
        }



      ],

  },
// ----------------------otralista



{
  listId: 1,
  createdAt: new Date(),
  modifiedAt: new Date(),
  name: 'doing',
  tasks: [
    {
      listId: 1,
      taskId: 0,
      text: 'aprender typescript',
      completed: false,
      color: 'white',
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
  ],
},
// ....se termina lista

],

 };
// ....cierra el export
getData() {
  return this.data;
}

addNewList(name: string) {
  const now = new Date();
  const newList: List = {
    listId: Date.now(),
    createdAt: now,
    modifiedAt: now,
    name,
    tasks: [],
  };
  this.data.lists.push(newList);
}

addNewTask(name: string, list:List) {
  const newTask: Task={

    listId: 0,
    taskId: 0,
    text: name,
    completed: false,
    color: 'white',
    createdAt: new Date(),
    modifiedAt: new Date(),



  };
  console.log('me esta llegando'+name);
  console.log('me esta llegando'+newTask);
  
  this.lists.tasks.push(newTask);
 
}


        

deleteList(listId: number) {
  this.data.lists = this.data.lists.filter(list => list.listId !== listId);
}


// ----me cargo el constructor

  
}