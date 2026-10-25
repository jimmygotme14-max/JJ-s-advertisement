export default function TintBar({ thin = false }) {
  return (
    <div className={`tintbar${thin ? ' thin' : ''}`} aria-hidden="true">
      <span /><span /><span /><span />
    </div>
  );
}
