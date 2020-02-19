import React from 'react';

const Board = ({ lists, setLists }) => {
  return (
    <React.Fragment>
      <h2>I am a board!!! See my lists below here </h2>
      <li>
        {lists.map(list => (
          <ul>{list.name}</ul>
        ))}
      </li>
    </React.Fragment>
  );
};

export default Board;
