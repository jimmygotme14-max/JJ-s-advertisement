export default function Steps({ items }) {
  return (
    <ol className="steps" style={{ '--count': items.length }}>
      {items.map(s => (
        <li className="step" key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
