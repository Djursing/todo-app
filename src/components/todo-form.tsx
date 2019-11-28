import React, { useState } from 'react';
import shortid from 'shortid';
import { TodoFormInterface, TodoInterface } from '../interfaces/interfaces';


const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [formState, setFormstate] = useState('');

  const newTodo: TodoInterface = {
    id: shortid.generate(),
    text: formState,
    isCompleted: false
  }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state with the text from input
    setFormstate(event.target.value)
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Create new todo item
    props.handleTodoCreate(newTodo)

    // Reset the input field
    if (inputRef && inputRef.current) {
      inputRef.current.value = ''
    }
  }


  // Handle 'Enter' in todo input
  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      // Create new todo item
      props.handleTodoCreate(newTodo)

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
        />
        <button onClick={event => handleSubmit(event)}>Submit</button>
    </div>
  )
}

export default TodoForm;