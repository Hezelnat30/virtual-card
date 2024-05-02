export default function Highlight() {
  return (
    <div className="buttons">
      <Badge text="React" />
      <Badge text="Vue" />
      <Badge text="Tailwindcss" />
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}
