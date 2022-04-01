import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string,
    todolistId: string
}
export type ChangeTaskStatusActionType={
    type: 'CHANGE-TASK'
    taskId: string
    isDone: boolean,
    todolistId: string
}
export type ChangeTaskTitleActionType={
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    todolistId: string
}

 type ActionsType = RemoveTaskActionType | AddTaskActionType| ChangeTaskStatusActionType| ChangeTaskTitleActionType
     |AddTodolistActionType |RemoveTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            let newTodolist = [...state[action.todolistId].filter(task => task.id !== action.taskId)]
            return {...state, [action.todolistId]:newTodolist}
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case 'CHANGE-TASK':
            return {
                ...state,
               [action.todolistId]: state[action.todolistId]
                   .map(task => task.id === action.taskId
               ? {...task, isDone: action.isDone}: task)
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => task.id === action.taskId
                        ? {...task, title: action.title}: task)
            }
        case 'ADD-TODOLIST':
            return {
                ...state,
               [action.todolistId]:[]
            }
            case "REMOVE-TODOLIST":{
               let newState = {...state}
                delete newState[action.id]
                return newState
            }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType =>{
    return {type:'CHANGE-TASK', isDone: isDone, taskId , todolistId }
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType =>{
    return {type:'CHANGE-TASK-TITLE',  taskId ,title, todolistId }
}

// export const AddTodolistAC=(title: string):AddTodolistActionType =>{
//     return {type:'ADD-TODOLIST', title }
// }