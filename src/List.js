import React from 'react';

const List = ({ listData, addCard }) => {
  const [card, setCard] = React.useState('');

  return (
    <React.Fragment>
      <h2>{listData.name}</h2>
      <ul>
        {listData.cards.map(card => (
          <li key={card}>{card}</li>
        ))}
      </ul>
      <input value={card} onChange={e => setCard(e.target.value)}></input>
      <button onClick={() => {
        addCard(card, listData)
        setCard("")
      }}>Add a card</button>
    </React.Fragment>
  );
};

export default List;
