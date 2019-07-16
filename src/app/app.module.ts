import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import {TodoTaskComponent} from './todo-task/todo-task.component';
import {DoneTaskComponent} from './done-task/done-task.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    DoneTaskComponent,
    TodoTaskComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
