import { useGlobal } from "reactn";
import "./App.css";
import { DeckUI } from "./DeckUI";
import { SupplyCardsUI } from "./SupplyCardsUI";

const DATA: { [key: string]: { coin: number } } = {
  金貨: { coin: 3 },
  遺物: { coin: 2 },
  銀貨: { coin: 2 },
  借金: { coin: 1 },
  銅貨: { coin: 1 },
};
const NULL_CARD = {
  coin: 0,
};

function App() {
  const [deck] = useGlobal("deck");
  let num_cards = 0;
  let coin_per_card = 0;
  deck.forEach((num, name) => {
    num_cards += num;
    coin_per_card += num * (DATA[name] ?? NULL_CARD).coin ?? 0;
  });
  coin_per_card /= num_cards;

  return (
    <div className="App">
      <SupplyCardsUI />
      <div>
        Deck: click to trash
        <DeckUI deck={deck} />
        <div>
          Statistics
          <ul>
            <li>#cards: {num_cards}</li>
            <li>coin per card: {coin_per_card.toFixed(2)}</li>
          </ul>
        </div>
        <div>
          <button>Push to log</button>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="log">Log: Player 1</div>
        <div className="log">Log: Player 2</div>
      </div>
    </div>
  );
}

export default App;
