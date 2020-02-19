import React from 'react';

const List = ({ listData, addCard, removeList, removeCard }) => {
  const [card, setCard] = React.useState('');

  return (
    <React.Fragment>
      <div className="col-sm" style={{ padding: '30px' }}>
        <div className="row">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
              <div className="col">
                <div className="row">
                  <div className="col">{listData.name}</div>
                  <button
                    className="btn btn-outline-warning btn-sm"
                    style={{ marginTop: '15px' }}
                    onClick={() => removeList(listData)}
                  >
                    Remove List
                  </button>
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              {listData.cards.map(card => (
                <li key={card} className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>{card}</p>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeCard(card, listData)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <input
                style={{ marginRight: '10px' }}
                value={card}
                onChange={e => setCard(e.target.value)}
              ></input>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  addCard(card, listData);
                  setCard('');
                }}
              >
                Add a card
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;
