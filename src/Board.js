import React from 'react';
import List from './List';

const Board = ({ lists, setLists }) => {
  const [listName, setListName] = React.useState('');

  const addCard = (card, listData) => {
    const newList = {...listData, cards: listData.cards.concat([card])}
    setLists([...lists.filter(list => list.name !== listData.name), newList]) // this looks kind of janky
  }

  const removeCard = (card, listData) => {
    const newList = {...listData, cards: listData.cards.filter(cardItem => cardItem !== card)}
    setLists([...lists.filter(list => list.name !== listData.name), newList]) // this still looks kind of janky
  }

  const addList = () => {
    setLists(lists.concat([{ name: listName, cards: [] }]));
    setListName('');
  };

  const removeList = (listToRemove) => {
    setLists(lists.filter(list => list.name !== listToRemove.name))
  }

  return (
    <React.Fragment>
      <h2>Board Name</h2>
      <ul>
        {lists.map(list => (
          <li key={list.name}>
            <List listData={list} addCard={addCard} removeList={removeList} removeCard={removeCard}/>
          </li>
        ))}
      </ul>
      <input
        value={listName}
        onChange={e => setListName(e.target.value)}
      ></input>
      <button onClick={() => addList()}>Add List</button>
    </React.Fragment>
  );
};

export default Board;
