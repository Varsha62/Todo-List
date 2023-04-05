import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState(() => {
    // Check if data is present in local storage
    const data = localStorage.getItem("listTodo");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  // Update local storage when listTodo state changes
  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);

  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.length === 0 ? (
          <p className="empty-list-message">Todo list is empty.......</p>
        ) : (
          listTodo.map((listItem,i)=>{
            return (
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })
        )}
      </div>
    </div>
  );
}

export default App;


