import React from 'react';

const Board = ({ lists, setLists }) => {
  const [listName, setListName] = React.useState('');

  const handleAddList = () => {
    setLists(lists.concat([{ name: listName, cards: [] }]));
    setListName('');
  };

  return (
    <React.Fragment>
      <h2>Board Name</h2>
      <ul>
        {lists.map(list => (
          <li key={list.name}>{list.name}</li>
        ))}
      </ul>
      <input value={listName} onChange={e => setListName(e.target.value)}></input>
      <button onClick={() => handleAddList()}>Add a list</button>
    </React.Fragment>
  );
};

export default Board;
