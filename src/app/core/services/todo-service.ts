import { TodoType } from "../types/todo-type";
import { Db } from "./db";

export interface TodoService extends Db<TodoType>{}
