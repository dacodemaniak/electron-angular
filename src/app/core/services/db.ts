import { Observable } from "rxjs"

export interface Db<T> {
    /**
     * Returns all of T objects
     * @returns Observable<Array<T>>
     */
    findAll(): Observable<Array<T>>

    /**
     * Returns a T object based on its id
     * @param id number
     * @returns Observable<T>
     */
    findOne(id: number): Observable<T>

    /**
     * Add a new element in the database
     * @param datas T
     * @returns {Observable<T>} object with the new id
     */
    add(datas: T): Observable<T>

    /**
     * Update the todo data
     * @param datas
     * @returns Observable<T>
     */
    update(datas: T): Observable<any>

    /**
     * Remove if exists the todo object
     * @param {number | T } datas
     * @returns Observable<any>
     */
    remove(datas: number | T): Observable<any>
}
