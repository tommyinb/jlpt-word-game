import { useContext } from "react";
import { Checkbox } from "./Checkbox";
import "./FormOrder.css";
import { SettingContext } from "./SettingContext";
import { Order } from "./order";

export function FormOrder() {
  const { order, saveOrder } = useContext(SettingContext);

  return (
    <div className="settings-FormOrder">
      <div className="label">順番</div>

      <div className="content">
        <Checkbox
          checked={order === Order.Random}
          setChecked={(value) =>
            saveOrder(value ? Order.Random : Order.Alphabet)
          }
        >
          ランダム
        </Checkbox>

        <Checkbox
          checked={order === Order.Alphabet}
          setChecked={(value) =>
            saveOrder(value ? Order.Alphabet : Order.Random)
          }
        >
          五十音
        </Checkbox>
      </div>
    </div>
  );
}
