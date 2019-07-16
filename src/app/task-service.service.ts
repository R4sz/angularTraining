import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private task = new Subject<string>();
  private tasks;

  constructor() { }


  addTask() {
    this.sumclicks += 1
    this.tasks.next(this.sumclicks);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }

}
