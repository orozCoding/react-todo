import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import "./classBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
