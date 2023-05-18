import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { environment } from '@environments/environment';
import { schema } from '../core/stores-meta/stores-meta';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(CoreModule.dbConfig)
  ]
})
export class CoreModule {
  public static dbConfig: DBConfig = {
    name: `${environment.localDB.name}`,
    version: environment.localDB.version,
    objectStoresMeta: schema
  }
}
