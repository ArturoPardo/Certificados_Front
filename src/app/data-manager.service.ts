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
getTask() {
  return this.data.lists;
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
removerNombre(name: string ,list: List){
console.log('data-valor', name , list);

list.name=name;

}

removertaskGlobal2(text:string, task: Task){

console.log("TEXTO "+text+"TASK "+task.text);
task.text=text;


}

addNewTask(text: string, list: List){
  const newTask : Task = {
      listId: list.listId,
      taskId: Date.now(),
      text,
      color: '',
      completed: false,
      createdAt: new Date(),
      modifiedAt: new Date()
  };
 
  this.data.lists = this.data.lists.map(listObj=>{
    if(listObj.listId === list.listId){
      listObj.tasks.push(newTask);
    }
    return listObj;
  });
}


        

deleteList(listId: number) {
  this.data.lists = this.data.lists.filter(list => list.listId !== listId);
}
deleteTask(task:Task) {
  console.log('mi id task' +task.taskId);
  console.log('mi data'+this.data.lists);

  this.data.lists = this.data.lists.map(listObj=>{
    if(listObj.listId === task.listId){
      console.log("premio");
      listObj.tasks = listObj.tasks.filter(objTask => objTask.taskId !== task.taskId)
    }
    return listObj;
  });
  
 
  
}
// removeTask(task:Task){
//   this.data.arrayList = this.data.arrayList.map(objList =>{
//      if(objList.listId === task.listId){
//       objList.tasks = objList.tasks.filter(objTask => objTask.taskId !== task.taskId)
//      }
//      return objList
//    });
// }
// ----me cargo el constructor

  
}
