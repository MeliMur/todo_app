import React from "react";
import "./styles/App.scss";
import { ToDoList } from "./ToDoList";

const App: React.FC = () => {
  return (
    <div className="container-fluid app">
      <div className="app__body">
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm">
            <ToDoList />
          </div>
          <div className="col-sm" />
        </div>
      </div>
    </div>
  );
};

export default App;
