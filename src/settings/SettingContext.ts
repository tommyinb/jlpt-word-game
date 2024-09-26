import { createContext } from "react";
import { Hint } from "./hint";
import { Order } from "./order";
import { Word } from "./word";

export const SettingContext = createContext<{
  active: boolean;
  setActive: (active: boolean) => void;

  hints: Hint[];
  saveHints: (hints: Hint[]) => void;

  order: Order;
  saveOrder: (order: Order) => void;

  words: Word[];
  saveWords: (words: Word[]) => void;
}>({
  active: false,
  setActive: () => {},

  hints: [],
  saveHints: () => {},

  order: Order.Random,
  saveOrder: () => {},

  words: [],
  saveWords: () => {},
});
