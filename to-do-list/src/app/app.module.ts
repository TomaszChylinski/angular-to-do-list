import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TodoComponent } from './todos/todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    DashboardComponent,
    TodoItemComponent,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
