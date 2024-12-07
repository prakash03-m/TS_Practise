import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './practiceSoln/counter/Counter';
import { ToDoList } from './practiceSoln/toDoList/ToDoList';
import { APIFetch } from './practiceSoln/apiFetch/APIFetch';
// import { ToggleSwitch } from './practiceSoln/toggleSwitch/ToggleSwitch';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ToggleSwitch /> */}
      {/* <ToDoList /> */}
      <APIFetch />
    </div>
  );
}

export default App;
