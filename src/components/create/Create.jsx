import React, { useState } from 'react';
import './Create.scss';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
   <div className='todo'>
      <h2
       className="todo__title">
        To Do List
      </h2>
      <form action="" className="todo__form">
        <input type="text" className="todo__input" id='fullname'/>
        <input type="text" className="todo__input" id='lastname' />
        <input type="text" className="todo__input"  id='profession'/>
        <input type="number" className="todo__input" id='age'/>
        <select name="gender" id="" className='todo__gender'>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <textarea name="" id="" placeholder='Tell us about yourself'></textarea>
      </form>

   </div>
  );
};

export default ToDoList;
