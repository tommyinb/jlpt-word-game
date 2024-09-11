import "./Card.css";

export function Card({ value, active, setActive }: Props) {
  return (
    <div
      className={`desks-Card ${active ? "active" : ""}`}
      onClick={() => setActive(true)}
    >
      <div className="cover" />
      <div className="content">{value}</div>
    </div>
  );
}

interface Props {
  value: string;

  active: boolean;
  setActive: (active: boolean) => void;
}
