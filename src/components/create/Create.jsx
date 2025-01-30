import React, { useState, createContext, useContext } from "react";
import "./Create.scss";

// Create a Context for the task data
const TaskContext = createContext();

const ToDoList = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = {
      fullname: formData.get("fullname"),
      lastname: formData.get("lastname"),
      profession: formData.get("profession"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      about: formData.get("about"),
    };
    setTasks([...tasks, newTask]);
    setIsPopupVisible(false); // Close the popup
    e.target.reset(); // Reset the form
  };

  return (
    <TaskContext.Provider value={tasks}>
      <div className="todo">
        <h2 className="todo__title">To Do List</h2>
        <button
          className="todo__btn"
          onClick={() => setIsPopupVisible(true)}
        >
          Add New Task
        </button>

        {isPopupVisible && (
          <>
            <div
              className="todo__overlay todo__overlay--visible"
              onClick={() => setIsPopupVisible(false)}
            ></div>
            <form
              className="todo__form todo__form--visible"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                className="todo__input"
                name="fullname"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                className="todo__input"
                name="lastname"
                placeholder="Last Name"
                required
              />
              <input
                type="text"
                className="todo__input"
                name="profession"
                placeholder="Profession"
                required
              />
              <input
                type="number"
                className="todo__input"
                name="age"
                placeholder="Age"
                required
              />
              <select name="gender" className="todo__gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <textarea
                name="about"
                className="todo__input"
                placeholder="Tell us about yourself"
                required
              ></textarea>
              <button className="todo__btn" type="submit">
                Submit
              </button>
            </form>
          </>
        )}

        <TaskList />
      </div>
    </TaskContext.Provider>
  );
};

const TaskList = () => {
  const tasks = useContext(TaskContext);

  return (
    <div className="todo__data">
      {tasks.map((task, index) => (
        <div className="todo__data__card" key={index}>
          <h3>{task.fullname} {task.lastname}</h3>
          <p>Profession: {task.profession}</p>
          <p>Age: {task.age}</p>
          <p>Gender: {task.gender}</p>
          <p>About: {task.about}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
