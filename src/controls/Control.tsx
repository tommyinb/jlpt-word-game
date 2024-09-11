import "./Control.css";
import { Next } from "./Next";

export function Control({ className }: Props) {
  return (
    <div className={`controls-Control ${className}`}>
      <Next />
    </div>
  );
}

interface Props {
  className: string;
}
