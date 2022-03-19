import { State } from "reactn/default";
import { updateGlobal } from "./updateGlobal";

export const DeckUI = (props: { deck: State["deck"] }) => {
  const { deck } = props;
  const deck_ui: JSX.Element[] = [];
  deck.forEach((num, name) => {
    if (num === 0) return;
    const onClick = () => {
      updateGlobal((g) => {
        g.deck.set(name, g.deck.get(name) - 1);
      });
    };

    deck_ui.push(
      <span key={name}>
        <button onClick={onClick}>{name}</button>
        {num === 1 ? "" : num}
      </span>
    );
  });
  return <div className="deck_ui">{deck_ui}</div>;
};
