import { useCallback, useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./Order.css";
import { SettingContext } from "./SettingContext";

export function Order() {
  const { randomOrder, setRandomOrder } = useContext(SettingContext);

  return (
    <div className="settings-Order">
      <div className="label">順番</div>

      <Checkbox checked={randomOrder} setChecked={setRandomOrder}>
        ランダム
      </Checkbox>

      <Checkbox
        checked={!randomOrder}
        setChecked={useCallback(
          (order) => setRandomOrder(!order),
          [setRandomOrder]
        )}
      >
        五十音
      </Checkbox>
    </div>
  );
}
