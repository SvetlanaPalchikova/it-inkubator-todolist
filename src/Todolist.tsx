import React from 'react';
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    filteredTasks: (value:filterType)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>

            {props.tasks.map((m, i) => {
                return (
                    <li key={m.id}>
                        <button onClick={() => props.removeTask(m.id)}>x</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>
                )
            })
            }

        </ul>
        <div>
            <button onClick={()=>props.filteredTasks("All")}>All</button>
            <button onClick={()=>props.filteredTasks("Active")}>Active</button>
            <button onClick={()=>props.filteredTasks("Completed")}>Completed</button>
        </div>
    </div>
}
