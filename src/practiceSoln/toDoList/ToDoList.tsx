import React, { ChangeEvent, MouseEvent, useState } from 'react';
import {v4 as uuid4} from 'uuid';

type TodoItem = {
    id: string,
    item: string
}

type ItemId = string | null;

export const ToDoList:React.FC = (props) => {

    const [todoItem, setTodoItem] = useState<string>('');
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    
    
    const todoItemHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTodoItem(event.target.value)
    }

    const addTodoItemsHandler = () => {
        if (todoItem.trim() !== '') {
            setTodoList(prevState => [...prevState, {id: uuid4(), item: todoItem}]);
            setTodoItem('');
        }
    }

        const deleteTodoItemsHandler = (event:MouseEvent<HTMLOListElement>) => {
            const target = event.target as HTMLElement;
            const listItem = target.closest('li');
        
            if (listItem) {
                const itemId:ItemId = listItem.getAttribute('data-id');
                setTodoList(prevState => prevState.filter(ele => ele.id !== itemId))
            }
    }

    return(
        <div>
            <label htmlFor="todoInput">To-Do</label>
            <input type="text" placeholder='Enter ToDo' id='todoInput' onChange={todoItemHandler} value={todoItem}/>            

            <button onClick={addTodoItemsHandler}>Add</button>
            <ol onClick={deleteTodoItemsHandler}>
                {todoList.map(todo => (
                    <li key={todo.id} data-id={todo.id}>{todo.item}</li>
                ))}
            </ol>
        </div>
    )
}