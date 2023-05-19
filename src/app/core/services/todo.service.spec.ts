import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { TodoImplService } from './todo-impl.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { CoreModule } from '../core.module';
import { TodoType } from '../types/todo-type';
import { take } from 'rxjs';
import { AppModule } from 'src/app/app.module';

describe('TodoService', () => {
  let service: TodoImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        NgxIndexedDBService,
        PLATFORM_ID
      ]
    });
    service = new TodoImplService(new NgxIndexedDBService(CoreModule.dbConfig,  PLATFORM_ID));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Should a todo in the store`, (done: DoneFn) => {
    const todo: TodoType = {
      title: 'Test indexedDB',
      createdAt: new Date('2023-05-19T10:39:43.511Z'),
      done: false
    }
    service.add(todo)
      .pipe(
        take(1)
      )
      .subscribe((newTodo: TodoType) => {
        expect(newTodo.id).toBeInstanceOf(Number)
        done()        
      })
  })
});
