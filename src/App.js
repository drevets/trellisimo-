import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Board from './Board.js'

const Boards = () => {
  const [lists, setLists] = React.useState([])
  return (
    <div className="container-fluid">
    <Board lists={lists} setLists={setLists}/>
    </div>
  );
}

export default Boards;
