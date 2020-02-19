import React from 'react';
import List from './List';

const Board = ({ lists, setLists }) => {
  const [listName, setListName] = React.useState('');

  const addCard = (card, listData) => {
    const newList = {...listData, cards: listData.cards.concat([card])}
    setLists([...lists.filter(list => list.name !== listData.name), newList]) // this looks kind of janky
  }

  const addList = () => {
    setLists(lists.concat([{ name: listName, cards: [] }]));
    setListName('');
  };

  return (
    <React.Fragment>
      <h2>Board Name</h2>
      <ul>
        {lists.map(list => (
          <li key={list.name}>
            <List listData={list} addCard={addCard} />
          </li>
        ))}
      </ul>
      <input
        value={listName}
        onChange={e => setListName(e.target.value)}
      ></input>
      <button onClick={() => addList()}>Add a list</button>
    </React.Fragment>
  );
};

export default Board;
