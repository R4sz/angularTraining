import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  taskList = new Array<string>();

  @Output()
  taskToDone = new EventEmitter<string>();

  @Output()
  taskToRemove = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  removeTask(task) {
    this.taskToRemove.emit(task);
  }

  taskDone(task: string) {
    this.taskToDone.emit(task);

  }
}
