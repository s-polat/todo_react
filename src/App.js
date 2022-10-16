import "./App.scss";
import Completed from "./components/Completed";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { useReducer, useEffect, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const arr = [...state];
      const todo = action.payload.name;
      arr.push(todo);
      return arr;

    case "complate":
      const arr1 = [...state];
      const index = action.payload.index;
      const arr2 = arr1.map((todo, idx) => {
        if (idx === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return arr2;

    case "delete":
      const arr3 = [...state];
      arr3.splice(action.payload.index, 1);
      return arr3;

    case "restore":
      return action.payload;

    default:
      return state;
  }
}

function App() {
  const initial = [];
  const [state, dispatch] = useReducer(reducer, initial);
  const [lamp, setLamp] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("todoList");
    if (json) {
      const initialState = JSON.parse(json);
      dispatch({ type: "restore", payload: initialState });
    }
  }, []);

  useEffect(() => {
    const jsonState = JSON.stringify(state);
    localStorage.setItem("todoList", jsonState);
  }, [state]);

  return (
    <div
      className="App card"
      style={{
        backgroundColor: `${lamp ? "black" : "white"}`,
        color: `${lamp ? "white" : "black"}`,
      }}
    >
      <Header lamp={lamp} setLamp={setLamp} />
      <Input dispatch={dispatch} />

      <Todo state={state} dispatch={dispatch} />

      <Completed state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
