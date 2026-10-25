export default function SectionHead({ label, title, intro }) {
  return (
    <div className="section-head">
      <span className="label">{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
