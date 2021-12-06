import React from "react";

type propsType = {
    title: string
task:Array<InArray>
}
type InArray={
    id:number,
    title:string
    isDone:boolean
}
const Todolist = (props: propsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map(item=>{
debugger
                    return( <li key={item.id}><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span></li>)
                })
                }
{/*
                <li><input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span></li>
                <li><input type="checkbox" checked={props.task[1].isDone}/> <span>{props.task[1].title}</span></li>
                <li><input type="checkbox" checked={props.task[2].isDone}/> <span>{props.task[2].title}</span></li>
*/}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
export default Todolist;