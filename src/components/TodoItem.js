import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
        <div className='title'>
            <h1>Todo</h1>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default TodoItem