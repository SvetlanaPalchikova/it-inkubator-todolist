import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./components/AddItemForm";


export type FilterValuesType = "all" | "active" | "completed";
type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListId1, title: "What to learn", filter: "all"},
        {id: todoListId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todoListId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todoListId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

const updateTask=(todoListId: string, id: string, title: string )=>{
setTasks({...tasks, [todoListId]:tasks[todoListId].map(m=>m.id===id?{...m, title}: m)})
}
const updateTodoList=(todoListId: string, id: string, title: string )=>{
        setTasks({...tasks, [todoListId]:tasks[todoListId].map(m=>m.id===id?{...m, title}: m)})
    }
    function removeTask(id: string, todoListId: string) {
        //достанем нужный массив по todolistId:
        let todoListTasks = tasks[todoListId];
        // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
        tasks[todoListId] = todoListTasks.filter(t => t.id != id);
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        //достанем нужный массив по todoListId:
        let todoListTasks = tasks[todoListId];
        // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
        tasks[todoListId] = [task, ...todoListTasks];
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});
    }

    const addTodoList = (title: string) => {
        let newID = v1();
        let newTodoList: TodoListType = {id: newID, title: title, filter: "all"}
        setTodoLists([newTodoList, ...todoLists])
        setTasks({...tasks, [newID]: []
        })

    }

    function changeStatus(id: string, isDone: boolean, todoListId: string) {
        //достанем нужный массив по todolistId:
        let todoListTasks = tasks[todoListId];
        // найдём нужную таску:
        let task = todoListTasks.find(t => t.id === id);
        //изменим таску, если она нашлась
        if (task) {
            task.isDone = isDone;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setTasks({...tasks});
        }
    }

    function changeFilter(value: FilterValuesType, todoListId: string) {
        let todoList = todoLists.find(tl => tl.id === todoListId);
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists])
        }
    }

    function removeTodoList(id: string) {
        // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
        setTodoLists(todoLists.filter(tl => tl.id != id));
        // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
        delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});
    }

    return (
        <div className="App">
            <AddItemForm callBack={addTodoList}/>
            {
                todoLists.map(tl => {
                    let allTodoListTasks = tasks[tl.id];
                    let tasksForTodoList = allTodoListTasks;

                    if (tl.filter === "active") {
                        tasksForTodoList = allTodoListTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodoList = allTodoListTasks.filter(t => t.isDone === true);
                    }

                    return <TodoList
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodoList={removeTodoList}
                        updateTask={updateTask}
                    />
                })}

        </div>
    );
}

export default App;
