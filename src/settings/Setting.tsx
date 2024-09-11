import { Button } from "./Button";
import { Form } from "./Form";
import "./Setting.css";

export function Setting({ className }: Props) {
  return (
    <div className={`settings-Setting ${className}`}>
      <Button />

      <Form />
    </div>
  );
}

interface Props {
  className: string;
}
