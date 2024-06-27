import { Component,Input,  inject,Output,EventEmitter } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { EditTaskComponent } from "../edit-task/edit-task.component";
@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [DatePipe, EditTaskComponent]
})
export class TaskComponent {

@Input() task!: Task;
@Output() editClicked: EventEmitter<Task> = new EventEmitter<Task>();

private tasksService=inject(TasksService);
OnCompleteTask(){
this.tasksService.removeTask(this.task.id);}

OnEditTask(){
console.log(this.task)
  
    // Emit event to notify parent component that "Edit" is clicked
 
  
 }
// selectedTask: Task | null = null;
// editMode = false;


}
