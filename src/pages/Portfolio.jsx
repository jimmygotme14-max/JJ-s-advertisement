import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import WorkCard from '../components/WorkCard.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { work } from '../data/site.js';

const filters = ['All', 'Social', 'Email', 'Video', 'Display'];

export default function Portfolio() {
  usePageTitle('Portfolio');
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? work : work.filter(w => w.category === active);

  return (
    <>
      <PageHero
        proof="Proof 06 · Portfolio"
        eyebrow={`${work.length} pieces · 6 formats`}
        title={<>Ideas that work at <span className="hit">every size</span>.</>}
        intro="Concept campaigns created by the JJ's team to show what we can do for businesses like yours. Ask us for client case studies when we talk."
      />

      <section className="section section-tight">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter work by type">
            {filters.map(f => (
              <button key={f} type="button" className={`chip${active === f ? ' active' : ''}`} aria-pressed={active === f} onClick={() => setActive(f)}>
                {f}
                <span className="chip-count">{f === 'All' ? work.length : work.filter(w => w.category === f).length}</span>
              </button>
            ))}
          </div>
          <div className="work-grid">
            {shown.map(w => <WorkCard key={w.id} item={w} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Want to see your brand here?" />
    </>
  );
}
