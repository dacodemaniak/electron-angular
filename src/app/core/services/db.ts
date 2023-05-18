import { Observable } from "rxjs"

export interface Db<T> {
    findAll(): Observable<Array<T>>
    findOne(id: number): Observable<T>
    add(datas: T): Observable<T>
    update(datas: T): Observable<any>
    remove(datas: number | T): Observable<any>
}
