import { updateGlobal } from "./updateGlobal";

export const build_supply_button = (xs: string[]) => {
  return xs.map((x) => {
    const onClick = () => {
      updateGlobal((g) => {
        g.deck.set(x, (g.deck.get(x) ?? 0) + 1);
      });
    };

    return (
      <button key={x} onClick={onClick}>
        {x}
      </button>
    );
  });
};
