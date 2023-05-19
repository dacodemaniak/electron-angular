import { Component, OnInit } from '@angular/core';
import { TodoImplService } from '@services/todo-impl.service';
import { take } from 'rxjs/operators';
import { TodoType } from './core/types/todo-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: Array<TodoType> = []

  public constructor(
    private _todoService: TodoImplService
  ) {}

  ngOnInit(): void {

      this._todoService.findAll()
      .pipe(
        take(1)
      )
      .subscribe((todos: Array<TodoType>) => {
        this.todos = todos;
      })


  }

  
}
