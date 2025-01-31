import React, { useState } from "react";
import "./Create.scss";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../context/Context";
import View from "../view/View";

const initialState = {
  fullname: "",
  lastname: "",
  profession: "",
  age: "",
  gender: "",
  about: "",
};

const ToDoList = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [user, setUser] = useState(initialState);
  const { userData, setUserData } = useStateValue();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    setUserData([...userData, { ...user, id: uuidv4() }]);
    setUser(initialState); 
    setIsPopupVisible(false); 
  };

  return (
    <div className="todo">
      <h2 className="todo__title"> User List</h2>

      <button className="todo__btn" onClick={() => setIsPopupVisible(true)}>
        Add New Task
      </button>
      <View />

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
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            />
            <input
              type="text"
              className="todo__input"
              name="lastname"
              placeholder="Last Name"
              required
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
            <input
              type="text"
              className="todo__input"
              name="profession"
              placeholder="Profession"
              required
              value={user.profession}
              onChange={(e) => setUser({ ...user, profession: e.target.value })}
            />
            <input
              type="number"
              className="todo__input"
              name="age"
              placeholder="Age"
              required
              value={user.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
            />
            <select
              name="gender"
              className="todo__gender"
              required
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <textarea
              name="about"
              className="todo__input"
              placeholder="Tell us about yourself"
              required
              value={user.about}
              onChange={(e) => setUser({ ...user, about: e.target.value })}
            ></textarea>
            <button className="todo__btn" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ToDoList;
