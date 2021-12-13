import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import set = Reflect.set;

export type filterType="All"|"Active"|"Completed"
function App() {

    let [tasks, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS", isDone: true},
        {id: 6, title: "ReactJS", isDone: false}
    ])
    const [filterValue, setFilterValue] = useState('All')

    let isDoneTrue = tasks


    if (filterValue ==='Completed'){
        isDoneTrue=tasks.filter(f=>!f.isDone)
    }

    if (filterValue ==='Active'){
        isDoneTrue=tasks.filter(f=>f.isDone)
    }

    const filteredTasks = (value: filterType) => {
        setFilterValue(value)
    }
    console.log(filterValue)
    const removeTask = (id: number) => {
        setTask(tasks.filter(f => f.id !== id))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={isDoneTrue}
                removeTask={removeTask}
                filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;
