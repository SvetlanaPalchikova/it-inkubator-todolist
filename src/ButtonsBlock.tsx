import React, {FC} from 'react';

import {FilterValuesType} from "./App";
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

type ButtonsBlockPropsType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

const ButtonsBlock: FC<ButtonsBlockPropsType> = (
    {
        filter,
        setFilterValue
    }) => {
    return (
        <ButtonGroup
            fullWidth
            variant="contained"
            size={"small"}>
            <Button
                color={filter === "all"? "secondary":"primary"}
                onClick={setFilterValue("all")}>
                Все
            </Button>
            <Button
                color={filter === "active"? "secondary":"primary"}
                onClick={setFilterValue("active")}>
                В работе
            </Button>
            <Button
                color={filter === "completed"? "secondary":"primary"}
                onClick={setFilterValue("completed")}>
                Выполнено
            </Button>
            {/*<Button*/}
            {/*    active={filter === "all"}*/}
            {/*    title={"Все"}*/}
            {/*    onClickHandler={setFilterValue("all")}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    active={filter === "active"}*/}
            {/*    title={"В работе"}*/}
            {/*    onClickHandler={setFilterValue("active")}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    active={filter === "completed"}*/}
            {/*    title={"Выполнено"}*/}
            {/*    onClickHandler={setFilterValue("completed")}*/}
            {/*/>*/}

        </ButtonGroup>
    );
};

export default ButtonsBlock;