import MockAd from './MockAd.jsx';

export default function WorkCard({ item }) {
  return (
    <article className="work-card">
      <div className="artboard">
        <div className="artboard-inner">
          <MockAd fit {...item} />
        </div>
      </div>
      <div className="work-meta">
        <span className="label">{item.category} · {item.sector}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <span className="label spec">{item.formatLabel}</span>
      </div>
    </article>
  );
}
