import { TaskData } from "zone.js/lib/zone-impl";
import { NewTaskData } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TasksService{


  private  tasks=[{id:'t1',
        userId:'u1',
        title:'master Angular',
        summary:'Learn all the basic',
        dueDate:'2025-12-31'},
      {id:'',
        userId:'',
        title:'',
        summary:'',
        dueDate:''},
       { id:'',
        userId:'',
        title:'',
        summary:'',
        dueDate:''}
        
      ];
 
      


      constructor(){
        const tasks= localStorage.getItem('tasks');
        if(tasks){
          this.tasks=JSON.parse(tasks);
        }
      }
getUserTasks(userId:string)
{
    return this.tasks.filter((task)=>task.userId===userId);
}


addTask(taskData:NewTaskData,userId:string){
    this.tasks.unshift({
        id:new Date().getTime().toString(),
        userId:userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate:taskData.date
      })

      this.saveTasks();

}
removeTask( id:string){this.tasks=this.tasks.filter((task)=> task.id !==id);

this.saveTasks();}



private saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks));
}
}