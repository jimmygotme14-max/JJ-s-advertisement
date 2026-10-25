import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Steps from '../components/Steps.jsx';
import CtaBand from '../components/CtaBand.jsx';
import MockAd from '../components/MockAd.jsx';
import usePageTitle from '../components/usePageTitle.js';

const types = [
  { title: 'Social video ads', text: 'Short, punchy videos for Facebook, Instagram, TikTok and YouTube, cut for each placement.' },
  { title: 'Commercials', text: 'Spots for streaming services and local TV, with scripts written to sell.' },
  { title: 'Product videos', text: 'Show what you sell in action, for your website, store pages and ads.' },
  { title: 'Brand stories', text: 'Who you are and why it matters, told in a minute or two.' },
  { title: 'Customer testimonials', text: 'Your real customers on camera, explaining why they chose you.' },
  { title: 'Motion graphics', text: 'Animated logos, explainers and text-led videos when filming isn’t needed.' },
];

const lengths = [
  { len: ':06', use: 'Bumper ads. One message, one image, unskippable.' },
  { len: ':15', use: 'Social and pre-roll. The most common ad length.' },
  { len: ':30', use: 'TV and streaming. Room for a short story.' },
  { len: ':60', use: 'Website and brand films. Room to explain.' },
];

const ratios = [
  { r: '16:9', w: 16, h: 9, use: 'YouTube, TV, website' },
  { r: '1:1', w: 1, h: 1, use: 'Feed posts' },
  { r: '4:5', w: 4, h: 5, use: 'Facebook & Instagram feed' },
  { r: '9:16', w: 9, h: 16, use: 'Reels, Stories, TikTok' },
];

const production = [
  { title: 'Pre-production', text: 'Concept, script, storyboard, casting and locations, all approved before we film.' },
  { title: 'Shoot', text: 'A professional crew on location or in studio, usually in a single day.' },
  { title: 'Post-production', text: 'Editing, color, sound, music, captions and motion graphics.' },
  { title: 'Delivery', text: 'Every length and size you need, ready to upload to each platform.' },
];

export default function Video() {
  usePageTitle('Promotional video');
  return (
    <>
      <PageHero
        proof="Proof 05 · Promotional video"
        eyebrow="Script · shoot · edit · deliver"
        title={<>Video that sells in six seconds <span className="hit">or sixty</span>.</>}
        intro="From quick social clips to TV commercials, we write, film and edit promotional videos that get your business seen and remembered."
        actions={<Link className="btn btn-primary" to="/contact">Plan a video</Link>}
        aside={
          <div className="player-frame">
            <MockAd format="video" headline="Opening Friday. Bring an appetite." tag="0:07 / 0:15" bg="#0b1a35" fg="#ffffff" accent="#2ee6d0" />
            <div className="player-meta"><span className="label">Spot · :15 · 16:9</span><span className="label">1920 × 1080</span></div>
          </div>
        }
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="What we make" title="Video for every goal" />
          <ul className="service-list">
            {types.map(s => (
              <li className="service" key={s.title}>
                <span className="swatch" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead label="Lengths & sizes" title="One shoot, every cut" intro="We plan the shoot so one day of filming gives you every length and shape you need." />
          <div className="lengths">
            {lengths.map(l => (
              <div className="length" key={l.len}>
                <span className="length-num">{l.len}</span>
                <p>{l.use}</p>
              </div>
            ))}
          </div>
          <div className="ratios">
            {ratios.map(r => (
              <figure className="ratio" key={r.r}>
                <div className="ratio-box-wrap">
                  <div className="ratio-box" style={{ aspectRatio: `${r.w} / ${r.h}`, [r.w > r.h ? 'width' : 'height']: '100%' }}>
                    <span>{r.r}</span>
                  </div>
                </div>
                <figcaption className="label">{r.use}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Production" title="How a video gets made" intro="You approve the plan before filming starts, so there are no surprises on shoot day." />
          <Steps items={production} />
        </div>
      </section>

      <CtaBand title="Have a video idea?" text="Tell us what you want people to feel, know or do. We'll come back with a concept and a quote." />
    </>
  );
}
