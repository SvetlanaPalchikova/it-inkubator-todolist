import React, {ChangeEvent, KeyboardEvent} from 'react';
import {TaskType} from "./App";
import EditableSpan from "./EditableSpan";
import {Checkbox, IconButton, ListItem} from "@material-ui/core";
import {DeleteOutline} from "@material-ui/icons";


type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
}

const Task: React.FC<TaskPropsType> = (
    {
        id,
        isDone,
        title,
        removeTask,
        changeTaskStatus,
        changeTaskTitle,
        ...props
    }
) => {
    // const id = props.id
    // const isDone = props.isDone
    // const title = props.title
    // const removeTask = props.removeTask
    // const changeTaskStatus = props.changeTaskStatus
    // const {id, isDone, title, removeTask, changeTaskStatus} = props

    const onClickRemoveTask = () => removeTask(id)
    const onChangeChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
        changeTaskStatus(id, e.currentTarget.checked)
    const onChangeChangeTaskTitle = (title: string) => {
        changeTaskTitle(id, title)
    }

    return (
        <ListItem divider>
            <span className={isDone ? "is-done" : ""}>
                <Checkbox
                    size={'small'}
                    color={"primary"}
                    onChange={onChangeChangeTaskStatus}
                    checked={isDone}/>
            {/*<input*/}
            {/*    type="checkbox"*/}
            {/*    onChange={onChangeChangeTaskStatus}*/}
            {/*    checked={isDone}/>*/}
            <EditableSpan title={title} changeTitle={onChangeChangeTaskTitle}/>
            </span>
            <IconButton onClick={onClickRemoveTask}>

                <DeleteOutline/>
            </IconButton>


        </ListItem>
    );
};

export default Task;

// 1. Функция принимает параметром массив чисел и возвращает max значение.
// getMax1([1,4,6,8]) => 8
// 2. Функция принимает параметром массив чисел и возвращает массив с двумя макс значениями
// getMax2([1,4,6,8]) => [8, 6]
// 3. Функция принимает параметром массив чисел и количество max,
// которые надо найти и возвращает массив  max значениями
// getMax3([1,4,6,8],1) => [8, 6, 4]
// math.max и sort не используем!