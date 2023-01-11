import "./App.css";
import DataList from "./components/DataList";
import React, { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
// const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  const [dataList, setDataList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [updateTodo, setUpdateTodo] = useState();

  // const [updateInputText, setUpateInputText] = useState("");

  // useEffect(() => {
  //   const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
  //   if (storagedTodoList) {
  //     setDataList(JSON.parse(storagedTodoList));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(dataList));
  // }, [dataList]);

  const handleOnChange = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setDataList([{ id: v4(), name: inputText, status: false }, ...dataList]);
    setInputText("");
  }, [inputText, dataList]);

  const handleDelete = useCallback(
    (id) => {
      setDataList(
        dataList.filter((todo) => {
          if (todo.id !== id) {
            return true;
          }
        })
      );
    },
    [dataList]
  );
  const handleFinish = useCallback(
    (id) => {
      setDataList(
        dataList.map((todo) => {
          if (todo.id === id) {
            return { ...todo, status: true };
          } else {
            return todo;
          }
        })
      );
    },
    [dataList]
  );
  const handleEdit = useCallback((selectedTask) => {
    console.log(selectedTask);
    dataList.map((todo) => {
      if (todo.id === selectedTask.id) {
        return selectedTask;
      } else {
        return todo;
      }
    });
    setInputText(selectedTask.name);
    setUpdateTodo(selectedTask);
  }, []);
  const handleUpdate = () => {
    let inputValue = document.getElementById("input").value
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].id === updateTodo.id) {
        // setUpdateTodo({ ...updateTodo, name: inputText });
        updateTodo.name = inputValue
        dataList.splice(i, 1, updateTodo);
        setDataList([...dataList]);
        return;   
      }
    }
    // setInputText(e.target.value)
  };
  const handleSearch = () => {
    let searchInput = document.getElementById("searchInput").value
    setDataList(dataList.filter(todo => {
       if(todo.name.toLowerCase().includes(searchInput)) {
        return {...todo}
       }
    }))
  }
  // useEffect(() => {}, [data]);
  return (
    <div className="App">
      <h3>To Do List</h3>
      <input
        id="input"
        type="text"
        placeholder="Input your todo..."
        onChange={handleOnChange}
        value={inputText}
      ></input>
      <button onClick={handleAdd}> Add </button>
      <button onClick={handleUpdate}> Update </button> <br></br>
      <input type="text" id="searchInput"></input>
      <button onClick={handleSearch}>Search</button>
      <DataList
        dataList={dataList}
        handleDelete={handleDelete}
        handleFinish={handleFinish}
        handleEdit={handleEdit}
      ></DataList>
    </div>
  );
}

export default App;
