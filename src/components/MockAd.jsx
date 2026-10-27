// Draws a sample ad at the true proportions of its format.
const ratios = {
  story: '9 / 16', reel: '9 / 16', feed: '4 / 5', square: '1 / 1',
  rect: '300 / 250', leader: '728 / 90', video: '16 / 9', email: '3 / 4',
};
const tall = new Set(['story', 'reel', 'feed', 'square', 'email', 'rect']);

export default function MockAd({ format, headline, tag, cta, bg, fg, accent, fit = false, label }) {
  const style = { '--ar': ratios[format], '--m-bg': bg, '--m-fg': fg, '--m-accent': accent };
  const cls = `mock mock-${format}${fit ? (tall.has(format) ? ' fit-tall' : ' fit-wide') : ''}`;

  return (
    <div className={cls} style={style} role="img" aria-label={label || `Sample ad: ${headline}`}>
      {format === 'email' ? (
        <div className="mock-body">
          <div className="mail-top"><span /><span /><span /></div>
          <div className="mail-banner">
            <span className="mock-tag">{tag}</span>
            <span className="mock-line">{headline}</span>
          </div>
          <div className="mail-lines"><span /><span /><span /></div>
          {cta && <span className="mock-cta">{cta}</span>}
        </div>
      ) : (
        <div className="mock-body">
          {(format === 'story' || format === 'reel') && <div className="mock-bars"><span /><span /><span /></div>}
          {format !== 'leader' && format !== 'video' && format !== 'reel' && <span className="mock-tag">{tag}</span>}
          <span className="mock-line">{headline}</span>
          {(format === 'video' || format === 'reel') && (
            <>
              <span className="mock-play" aria-hidden="true" />
              <div className="mock-timeline"><span className="mock-time">{tag}</span><span className="mock-track"><i /></span></div>
            </>
          )}
          {cta && format !== 'video' && format !== 'reel' && <span className="mock-cta">{cta}</span>}
        </div>
      )}
    </div>
  );
}
