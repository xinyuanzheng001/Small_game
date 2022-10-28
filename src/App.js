import { useState, useEffect } from 'react';
import Init from './init';
import { MainContainer, Board, Card, SelectedContainer } from './app.styled';

function App() {
  let init = Init();
  const [cards, setCards] = useState(init.cards);
  const [selected, setSelected] = useState([]);
  const [restart, setRestart] = useState(false);
  const [card_num, setCard_num] = useState(init.data);
  const [count, setCount] = useState(cards.length);
  useEffect(() => {
    if (restart) {
      setCards(init.cards);
      setSelected([]);
      setCard_num(init.data);
      setRestart(false);
      setCount(init.cards.length);
    }
  }, [restart, init.cards, init.data]);
  const clickHandler = (e) => {
    setCount(count - 1);
    e.target.style.display = 'none';
    let current = selected.slice();
    let isDelete = false;
    if (current.indexOf(e.target.src) === -1) {
      current.push(e.target.src);
    } else {
      const existed = current.filter((item) => item === e.target.src);
      if (existed.length === 2) {
        isDelete = true;
      }
      let index = current.indexOf(e.target.src);
      current.splice(index + 1, 0, e.target.src);
    }
    setSelected(current);
    if (!isDelete && current.length === 7) {
      setTimeout(() => {
        alert('Failed');
        setRestart(true);
      }, 200);
    }
    if (isDelete) {
      setTimeout(
        () => setSelected(current.filter((item) => item !== e.target.src)),
        200
      );
      let copy = card_num.slice();
      copy = copy.map((item) => {
        if (item.name === e.target.name) {
          item.count -= 3;
        }
        return item;
      });
      setCard_num(copy);
    }
    if (count === 1) {
      setTimeout(() => {
        alert('Success');
        setRestart(true);
      }, 200);
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: '30px' }}>
        <h2>Cards: {count}</h2>
        <MainContainer>
          {card_num.map((item) => (
            <div>
              <img
                src={item.src}
                alt="img"
                style={{ width: '55px', height: '55px' }}
              ></img>
              <span> x {item.count}</span>
            </div>
          ))}
        </MainContainer>
      </div>
      <div style={{ margin: '30px auto' }}>
        <Board>
          <div style={{ margin: '15px', position: 'relative' }}>
            {cards.map((card) => (
              <Card
                src={card.src}
                name={card.name}
                alt="img"
                style={{
                  top: card.top,
                  left: card.left,
                  position: 'absolute',
                }}
                onClick={(e) => clickHandler(e)}
              ></Card>
            ))}
          </div>
        </Board>
        <SelectedContainer>
          {selected.map((item) => (
            <Card src={item} alt="img"></Card>
          ))}
        </SelectedContainer>
      </div>
    </div>
  );
}

export default App;
