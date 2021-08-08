import React, { useState, useEffect } from "react";
import "./style.css";

// get lo data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  //add custom section items
  const addItems = () => {
    if (!inputdata) {
      alert("Please fill the Data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      setInputdata([]);
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputdata("");
    }
  };

  // how to delete Items section

  const deleteItem = (index) => {
    const updateItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updateItems);
  };

  //edit items section
  const editItems = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });

    setInputdata(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // DeleteAll the element wich does not wants you

  const DeleteAll = () => {
    setItems([]);
  };

  // we are adding local storage for our data

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/egg.jpg" alt="" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputdata(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
          </div>
          {/* show our new items list */}

          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItems(curElem.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* remove all buttons */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={DeleteAll}>
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
