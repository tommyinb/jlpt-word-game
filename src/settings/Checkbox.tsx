import { ReactNode } from "react";
import "./Checkbox.css";

export function Checkbox({ checked, setChecked, children }: Props) {
  return (
    <label className="settings-Checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />

      {children}
    </label>
  );
}

interface Props {
  checked: boolean;
  setChecked: (checked: boolean) => void;

  children: ReactNode;
}
