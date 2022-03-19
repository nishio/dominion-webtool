import { build_supply_button } from "./build_supply_button";

export const SupplyCardsUI = () => {
  const CARD_VP = ["属州", "公領", "屋敷", "呪い"];
  const CARD_MONEY = ["金貨", "銀貨", "銅貨"];

  const CARD_KINGDOM = [
    "倒壊",
    "魔除け",
    "道具",
    "借金",
    "使者",
    "航海士",
    "橋の下のトロル",
    "大衆",
    "遺物",
    "迫害者",
  ];
  const CARD_OUT_SUPPLY = ["インプ"];

  return (
    <div>
      Supply: click to add deck
      <div style={{ display: "flex", gap: "10px" }}>
        <div className="column">{build_supply_button(CARD_VP)}</div>
        <div className="column">{build_supply_button(CARD_MONEY)}</div>

        <div>
          <div className="row">
            {build_supply_button(CARD_KINGDOM.slice(5))}
          </div>
          <div className="row">
            {build_supply_button(CARD_KINGDOM.slice(0, 5))}
          </div>
          <div>{build_supply_button(CARD_OUT_SUPPLY)}</div>
        </div>
      </div>
    </div>
  );
};
