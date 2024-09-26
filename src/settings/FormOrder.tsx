import { useCallback, useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./FormOrder.css";
import { SettingContext } from "./SettingContext";

export function FormOrder() {
  const { randomOrder, setRandomOrder } = useContext(SettingContext);

  return (
    <div className="settings-FormOrder">
      <div className="label">順番</div>

      <div className="content">
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
    </div>
  );
}
