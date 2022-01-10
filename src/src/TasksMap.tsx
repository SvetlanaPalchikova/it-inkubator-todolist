import React, {ChangeEvent} from "react";
import styles from "../Todolist.module.css";
import {TaskType} from "../Todolist";

type TasksMapType={
    tasks: Array<TaskType>
    onChangeCheckbox:(tID: string, value: boolean)=>void
    onClickHandler:(tID:string)=>void
}


export  const TasksMap=(props: TasksMapType)=>{
return(
    <ul>
        {
            props.tasks.map(t => {
                return <li key={t.id} className={t.isDone? styles.isDone:""}>
                    <input type="checkbox" checked={t.isDone}
                           onChange={(event: ChangeEvent<HTMLInputElement>) =>props.onChangeCheckbox(t.id, event.currentTarget.checked)}/>
                    <span>{t.title}</span>
                    <button onClick={()=>props.onClickHandler(t.id)}>x</button>
                </li>
            })
        }
    </ul>
)
}