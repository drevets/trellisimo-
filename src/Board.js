import React from 'react';
import List from './List';

const Board = ({ lists, setLists }) => {
  const [listName, setListName] = React.useState('');

  const addCard = (card, listData) => {
    const newList = { ...listData, cards: listData.cards.concat([card]) };
    setLists([...lists.filter(list => list.name !== listData.name), newList]);
  };

  const removeCard = (card, listData) => {
    const newList = {
      ...listData,
      cards: listData.cards.filter(cardItem => cardItem !== card),
    };
    setLists([...lists.filter(list => list.name !== listData.name), newList]);
  };

  const addList = () => {
    setLists(lists.concat([{ name: listName, cards: [] }]));
    setListName('');
  };

  const removeList = listToRemove => {
    setLists(lists.filter(list => list.name !== listToRemove.name));
  };

  return (
    <React.Fragment>
      <div className="row">
        <h2>My Board</h2>
      </div>
      <div className="row">
        <input
          value={listName}
          onChange={e => setListName(e.target.value)}
        ></input>
        <button onClick={() => addList()}>Add List</button>
      </div>
      <div className="row">
        {lists.map(list => (
          <List
            key={list.name}
            listData={list}
            addCard={addCard}
            removeList={removeList}
            removeCard={removeCard}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Board;
