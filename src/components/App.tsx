// Template for app: https://medium.com/javascript-in-plain-english/how-to-build-a-todo-list-app-with-react-hooks-and-typescript-b9cbdc61e966

import React, { useState } from 'react';
import { TodoInterface } from '../interfaces/interfaces';
import TodoForm from './todo-form';
import TodoList from './todo-list';
import '../styles/App.scss'

const TodoListApp = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  // Create new todo item
  const handleTodoCreate = (todo: TodoInterface) => {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Update new todos state
    newTodosState.push(todo)

    // Update todos state
    setTodos(newTodosState)
  }

  // Update existing todo item
  const handleTodoUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string) => {
    // Prepare new todo state
    const newTodosState: TodoInterface[] = [...todos]

    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id) !.text = event.target.value

    // Update todo statek
    setTodos(newTodosState)
  }

  // Removing exiting todos
  const handleTodoRemove = (id: string) => {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id)

      // Update todo state
      setTodos(newTodosState)
  }

  // Complete todo
  const handleTodoComplete = (id: string) => {
    const newTodoState: TodoInterface[] = [...todos]

    // Find correct todo item to complete
    newTodoState.find((todo: TodoInterface) => todo.id === id) !.isCompleted
      = !newTodoState.find((todo: TodoInterface) => todo.id === id) !.isCompleted

    // Update todo state
    setTodos(newTodoState)
  }

  // Check if todo item has title
  const handleTodoBlue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    }
    event.target.classList.add('todo-input-error')
  }

  // Return components
  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlue}
      />
    </div>
  )
}

export default TodoListApp;