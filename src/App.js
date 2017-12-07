import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './components/todo';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <TodoComponent/>
      </div>
    );
  }
}

export default App;
