import {FilterValuesType, TodoListType} from "../App";
import {
    ActionType,
    AddTodoListAC, AddTodoListAT,
    ChangeTodoListAC,
    ChangeTodoListAT, ChangeTodoListFilterAC, ChangeTodoListFilterAT,
    RemoveTodolistAC,
    todoListsReducer
} from "./todolist-reucer";
import {v1} from "uuid";

test('correct todolist should be removed', () => {
    let todolistId1: string = v1();
    let todolistId2: string = v1();

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, RemoveTodolistAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "ADD-TODOLIST";

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
const action: AddTodoListAT= AddTodoListAC(newTodolistTitle)
    const endState = todoListsReducer(startState,action)

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});
test('correct todolist should change its name', () => {
    let todolistId1: string = v1();
    let todolistId2: string = v1();

    let newTodolistTitle = "CHANGE-TODOLIST";

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
const action: ChangeTodoListAT = ChangeTodoListAC(todolistId2, newTodolistTitle)

    const endState = todoListsReducer(startState, action);

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});
test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "completed";

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action: ActionType = ChangeTodoListFilterAC(todolistId2, newFilter)
    //     {
    //     type: "CHANGEFILTER-TODOLIST",
    //     filter: newFilter,
    //     id: todolistId2
    // }
    const endState = todoListsReducer(startState, action );

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});
