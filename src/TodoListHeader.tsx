import React from 'react';
import Button from "./Button";
import EditableSpan from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

type TodoListHeaderPropsType = {
    title: string
    removeTodoList: () => void
    changeTodoListTitle: (newTitle: string) => void
}

const TodoListHeader: React.FC<TodoListHeaderPropsType> = (
    {
        title,
        changeTodoListTitle,
        ...props
    }
) => {

    return (
       <div style={{textAlign: "center"}}>
        <h3>
            <EditableSpan title={title} changeTitle={changeTodoListTitle}/>
            <IconButton onClick={props.removeTodoList}>
                <Delete/>
            </IconButton>
            {/*<Button onClickHandler={props.removeTodoList} title={"x"}*/}
            {/*        active={false}/>*/}
        </h3>
       </div>
    );
};

export default TodoListHeader;