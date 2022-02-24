import {FilterValuesType, TodoListType} from "../App";
import any = jasmine.any;
import {v1} from "uuid";

export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST"
    id: string
}
export  type AddTodoListAT = {
    type: "ADD-TODOLIST"
    title: string
}
export  type ChangeTodoListAT = {
    type: "CHANGE-TODOLIST"
    title: string
    id: string
}
export type  ChangeTodoListFilterAT = {
    type: "CHANGEFILTER-TODOLIST"
    filter: FilterValuesType
    id: string
}
export type ActionType = RemoveTodolistAT | AddTodoListAT | ChangeTodoListAT | ChangeTodoListFilterAT
export const todoListsReducer =
    (todoLists: Array<TodoListType>, action: any): Array<TodoListType> => {
        switch (action.type) {
            case "REMOVE-TODOLIST":
                return todoLists.filter(tl => tl.id !== action.id)
            case "ADD-TODOLIST":
                const newTodolistID = v1()
                const newTodolist: TodoListType = {id: v1(), title: action.title, filter: "all"}
                return [...todoLists, newTodolist]
            case "CHANGE-TODOLIST":
                return todoLists.map(tl => tl.id === action.id
                    ? {...tl, title: action.title}
                    : tl)
            case "CHANGEFILTER-TODOLIST":
                return todoLists.map(tl => tl.id === action.id
                    ? {...tl, filter: action.filter}
                    : tl)
            default:
                return todoLists
        }
    }
export const RemoveTodolistAC = (id: string): RemoveTodolistAT => {
    return {
        type: "REMOVE-TODOLIST",
        id
    }
}

export const AddTodoListAC = (title: string): AddTodoListAT => {
    return {
        type: "ADD-TODOLIST",
        title
    }
}
export const ChangeTodoListAC = (id: string, title: string): ChangeTodoListAT => {
    return {
        type: "CHANGE-TODOLIST",
        id,
        title,


    }
}
export const ChangeTodoListFilterAC = (id: string, filter: FilterValuesType): ChangeTodoListFilterAT => {
    return {
        type: "CHANGEFILTER-TODOLIST",
        id,
        filter
    }
}
