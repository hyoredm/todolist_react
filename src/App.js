import React from 'react';
import {useState, useCallback, useRef} from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F0FFF0;
  }
`;


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할 일을 추가해주세요',
      done: false,
    },
    {
      id: 2,
      text: '완료한 일은 표시해주세요',
      done: true,
    },
  ]);

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
      );
    },
    [todos],
  );

  const onRemove = useCallback(
   (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const nextId = useRef(4);
   const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        done: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos],
  );

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoCreate onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
      </TodoTemplate>
    </>
  );
}

export default App;
