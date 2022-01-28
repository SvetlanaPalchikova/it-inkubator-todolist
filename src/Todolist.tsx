import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {Input} from "./Input";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask:(todolistsId: string, taskId: string, title: string)=>void
    updateTodolist:(todolistsId: string, title: string)=>void
}

export function Todolist(props: PropsType) {


    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const onClickHandler = (tID: string) => props.removeTask(tID, props.id)
    const onChangeHandlerFromCheckbox = (event:ChangeEvent<HTMLInputElement>, tID:string) => {
        let newIsDoneValue = event.currentTarget.checked;
        props.changeTaskStatus(tID, newIsDoneValue, props.id);
    }
    const callBackHandlerForEditableSpan=(tID:string, title:string)=>{
props.updateTask(props.id, tID, title )
    }
    const callBackHandlerForHeader=(tID:string, title:string)=>{
        props.updateTodolist(tID, title)
    }
    const callBackHandlerForInput=(newTitle:string)=>{
        props.addTask(newTitle, props.id)
    }
    return <div>
        <h3>
            <EditableSpan title={props.title} callBack={(title)=>callBackHandlerForHeader(props.id, title)}/>

            <button onClick={removeTodolist}>x</button>
        </h3>
        <div>
            <Input callBack={callBackHandlerForInput} />
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>

                        <input type="checkbox" onChange={(event)=>onChangeHandlerFromCheckbox(event, t.id)} checked={t.isDone}/>
                        <EditableSpan title={t.title} callBack={(title)=>callBackHandlerForEditableSpan(t.id, title)}/>
                        <Button name={'x'} callBack={()=>onClickHandler(t.id)}/>
                       {/*<button onClick={onClickHandler}>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


