import React, { useState } from "react";

export function MainPage(props) {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function increment() {
        setCount(count + 1);
    }

    function InputChange(event) {
        setInputValue(event.target.value);
    }

    function addTodo() {
        const numberId = Date.now();
        const newTodo = {
            id: numberId,
            title: inputValue,
        };

        setTodos([...todos, newTodo]);
        setInputValue("");
    }

    function deleteAll() {
        setTodos([]);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>

            <div>
                <input
                    type="text"
                    placeholder="Введите текст"
                    value={inputValue}
                    onChange={InputChange}
                />
                <button onClick={addTodo}>Добавить</button>
            </div>

            <button onClick={deleteAll}>Удалить все</button>

            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ol>
        </div>
    );
}

