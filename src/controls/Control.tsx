import { Setting } from "../settings/Setting";
import "./Control.css";
import { Next } from "./Next";

export function Control({ className }: Props) {
  return (
    <div className={`controls-Control ${className}`}>
      <Setting className="setting" />

      <Next />
    </div>
  );
}

interface Props {
  className: string;
}
