import React from 'react';
import './App.css';
import Board from './Board.js'

const App = () => {
  const [lists, setLists] = React.useState([])
  return (
    <Board lists={lists} setLists={setLists}/>
  );
}

export default App;
