import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todoTasks = new Array<string>();
  doneTasks = new Array<string>();

  constructor() {
  }

  addTask(task: string): void {
    this.todoTasks.push(task);
  }

  ngOnInit() {
  }

  removeTask(task) {
    this.todoTasks = this.todoTasks.filter(e => e !== task);
  }

  taskDone(task: string) {
    this.doneTasks.push(task);
    this.removeTask(task);

  }

}
