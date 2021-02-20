import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit(){
  }


  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    } 

    // onSubmit we store the necessary data - the id is created by default - need to hook up db but also connect this. Continue Watching both videos.
  }
}
