import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoItem } from 'src/app/models/toDo';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  @Output() addToDo: EventEmitter<any> = new EventEmitter(); // have to catch this event

  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // onSubmit we store the necessary data - the id is created by default
    // need to hook up db but also connect this. Continue Watching both videos
    // make sure that if no value or undefined that we catch that
    const todo = {
      title: this.title,
      completed: false
    };


    this.addToDo.emit(todo); // able to do if you have an @output
    console.log('add todo component 1: ', todo);
  }
}
