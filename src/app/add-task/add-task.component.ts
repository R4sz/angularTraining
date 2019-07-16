import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  childTask: string;

  @Output()
  output = new EventEmitter<string>();

  constructor() { }

  push() {
    this.output.emit(this.childTask);
    this.childTask = "";
  }

  ngOnInit() {
  }

}
