import { enableMapSet } from "immer";
import { setGlobal } from "reactn";

const initialDeck = () => {
  const r = new Map();
  r.set("銅貨", 7);
  r.set("屋敷", 3);
  return r;
};
const INITIAL_GLOBAL_STATE = {
  deck: initialDeck(),
};

export const initializeGlobalState = () => {
  enableMapSet();
  setGlobal(INITIAL_GLOBAL_STATE);
};

type TYPE_GLOBAL_STATE = typeof INITIAL_GLOBAL_STATE;

declare module "reactn/default" {
  export interface State extends TYPE_GLOBAL_STATE {}
}
