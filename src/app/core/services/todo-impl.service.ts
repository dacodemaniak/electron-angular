import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoType } from '../types/todo-type';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { TodoService } from './todo-service';

@Injectable({
  providedIn: 'root'
})
export class TodoImplService implements TodoService {

  /**
   * Inject NgxIndexedDBService
   *
   * @param _dbService NgxIndexedDBService
   */
  constructor(
    private _dbService: NgxIndexedDBService
  ) {}

  findAll(): Observable<TodoType[]> {
    return this._dbService.getAll('todo')
  }

  findOne(id: number): Observable<TodoType> {
    return this._dbService.getByID('todo', id)
  }

  add(datas: TodoType): Observable<TodoType> {
    return this._dbService.add(
      'todo',
      datas
    )
  }

  update(datas: TodoType): Observable<any> {
    return this._dbService.update('todo', datas)
  }

  remove(datas: number | TodoType): Observable<any> {
    let id: number

    if (datas.hasOwnProperty('id')) {
      id = (datas as TodoType).id!
    } else {
      id = datas as number
    }

    return this._dbService.deleteByKey('todo', id)
  }
}
