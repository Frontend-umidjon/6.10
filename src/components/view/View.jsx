import React, { useState } from "react";
import "../create/Create.scss";
import { useStateValue } from "../context/Context";

const View = () => {
  const { userData, setUserData } = useStateValue();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    fullname: "",
    lastname: "",
    profession: "",
    age: "",
    gender: "",
    about: "",
  });

  const handleEdit = (id) => {
    const taskToEdit = userData.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingId(id); 
      setEditForm(taskToEdit); 
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null); 
    setEditForm({
      fullname: "",
      lastname: "",
      profession: "",
      age: "",
      gender: "",
      about: "",
    });
  };

  const handleSaveEdit = (id) => {
    const updatedData = userData.map((task) =>
      task.id === id ? { ...task, ...editForm } : task
    );
    setUserData(updatedData);
    handleCancelEdit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleDelete = (id) => {
    const updatedData = userData.filter((task) => task.id !== id);
    setUserData(updatedData);
  };

  return (
    <div className="todo__data">
      {userData && userData.length > 0 ? (
        userData.map((task) => (
            <div className={`todo__data__card `} key={task.id}>
            {editingId === task.id ? (
              <div className="todo__edit__form">
                <input
                  type="text"
                  name="fullname"
                  value={editForm.fullname}
                  onChange={handleChange}
                  placeholder="Fullname"
                  className="todo__data__input"
                />
                <input
                  type="text"
                  name="lastname"
                  value={editForm.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                  className="todo__data__input"
                />
                <input
                  type="text"
                  name="profession"
                  value={editForm.profession}
                  onChange={handleChange}
                  placeholder="Profession"
                  className="todo__data__input"
                />
                <input
                  type="number"
                  name="age"
                  value={editForm.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="todo__data__input"
                />
                <select
                  name="gender"
                  value={editForm.gender}
                  onChange={handleChange}
                  className="todo__data__select"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <textarea
                  name="about"
                  value={editForm.about}
                  onChange={handleChange}
                  placeholder="About"
                  className="todo__data__textarea"
                />
                <div className="todo__data__actions">
                  <button
                    className="todo__data__btn todo__data__save"
                    onClick={() => handleSaveEdit(task.id)}
                  >
                    Save
                  </button>
                  <button
                    className="todo__data__btn todo__data__cancel"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3>
                  {task.fullname || "N/A"} {task.lastname || "N/A"}
                </h3>
                <p>Profession: {task.profession || "Not Specified"}</p>
                <p>Age: {task.age || "Unknown"}</p>
                <p>Gender: {task.gender || "Not Specified"}</p>
                <p>About: {task.about || "No details provided."}</p>

                <div className="todo__data__actions">
                  <button
                    className="todo__data__btn todo__data__edit"
                    onClick={() => handleEdit(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="todo__data__btn todo__data__delete"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="todo__data__empty">No tasks available. Create one!</p>
      )}
    </div>
  );
};

export default View;
