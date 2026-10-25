import { Component } from 'react';
import { problemMailto } from './reportProblem.js';
import { site } from '../data/site.js';

// If a page crashes, show a friendly message with a way to report it instead of a blank screen.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Page error:', error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;
    const message = String(this.state.error?.message || this.state.error).slice(0, 300);
    return (
      <section className="section">
        <div className="wrap problem-box" role="alert">
          <span className="label">Something went wrong</span>
          <h1>This page didn't load properly.</h1>
          <p>Sorry about that. Let us know and we'll fix it. You can also reach us directly at {site.email} or {site.phone}.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={problemMailto(message)}>Email us about this problem</a>
            <a className="btn btn-ghost" href="#/">Go to the home page</a>
          </div>
        </div>
      </section>
    );
  }
}
