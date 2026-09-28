import { Atom, Icon } from "./Icons";
export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <a className="brand" href="#">
          <span className="brand-mark">
            <Atom />
          </span>
          react<span className="brand-light">quiz</span>
          <span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-active" href="#">
            The quiz
          </a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <span className="header-note">
          <Icon name="code" size={17} /> A little practice. A lot of progress.
        </span>
      </div>
    </header>
  );
}
