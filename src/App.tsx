import React from 'react';
import './App.css';
import Todolist from "./Todolist";
const task1=[
    {id:1,title:'HTML&CSS',isDone:true},
    {id:2,title:'JS',isDone:false},
    {id:3,title:'React',isDone:true},
]

const task2=[
    {id:1,title:'HTML&CSS222222',isDone:true},
    {id:2,title:'JS22222222222',isDone:false},
    {id:3,title:'React22222222',isDone:true},
]

function App() {
    return (
        <div className="App">
            <Todolist title={"What to learn"} task={task1} />
            <Todolist title={'What to 222222'} task={task2} />
        </div>
    );
}

export default App;
