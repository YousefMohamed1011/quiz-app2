import { Atom, Icon } from "./Icons";
export default function StartScreen({ questions, dispatch }) {
  const maxPoints = questions.reduce(
    (sum, question) => sum + question.points,
    0,
  );
  return (
    <>
      <section className="intro">
        <span className="eyebrow">
          <span /> YOUR NEXT LEARNING CHALLENGE
        </span>
        <h1>
          Think you know <span>React?</span>
          <br />
          Let’s find out.
        </h1>
        <p>
          A little challenge for your inner developer. Put your knowledge
          <br className="desktop-break" /> to the test, learn something new, and
          keep getting better.
        </p>
      </section>
      <section className="challenge-card" aria-labelledby="challenge-title">
        <div className="challenge-art">
          <div className="art-grid" />
          <span className="art-label">
            <span /> THE REACT CHALLENGE
          </span>
          <span className="code-float code-top">&lt;React /&gt;</span>
          <div className="atom-orbit">
            <Atom className="hero-atom" />
          </div>
          <span className="code-float code-bottom">const you = 'ready';</span>
          <div className="art-caption">
            <span>Small questions.</span>
            <strong>Build your React confidence.</strong>
          </div>
          <span className="art-index">01 / REACT FUNDAMENTALS</span>
        </div>
        <div className="challenge-content">
          <div className="card-kicker">
            <span className="level">
              <span /> BEGINNER → INTERMEDIATE
            </span>
            <span className="version">REACT</span>
          </div>
          <h2 id="challenge-title">The React Quiz</h2>
          <p>
            From components to hooks, see how well you know
            <br className="desktop-break" /> the building blocks of modern
            React.
          </p>
          <div className="quiz-stats">
            <div>
              <Icon name="book" />
              <strong>{questions.length}</strong>
              <span>Questions</span>
            </div>
            <div>
              <Icon name="clock" />
              <strong>
                ~10 <small>min</small>
              </strong>
              <span>At your own pace</span>
            </div>
            <div>
              <Icon name="trophy" />
              <strong>{maxPoints}</strong>
              <span>Possible points</span>
            </div>
          </div>
          <button
            className="primary-button"
            onClick={() => dispatch({ type: "start" })}
          >
            Let’s start the quiz <Icon name="arrow" />
          </button>
          <span className="start-note">
            <Icon name="check" size={14} /> No sign-up. No pressure. Just
            progress.
          </span>
        </div>
      </section>
      <section className="topics" aria-labelledby="topics-title">
        <div className="section-label" id="topics-title">
          A LITTLE BIT OF EVERYTHING REACT
        </div>
        <div className="topic-list">
          <span>
            <Icon name="layers" size={16} /> Components & JSX
          </span>
          <span>
            <Icon name="code" size={16} /> Props & State
          </span>
          <span>
            <Icon name="bolt" size={16} /> Hooks & Effects
          </span>
          <span>
            <Icon name="target" size={16} /> React Fundamentals
          </span>
        </div>
      </section>
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <h2>Good to know before you go</h2>
          <span>A simple way to sharpen your skills.</span>
        </div>
        <div className="feature-grid">
          <article>
            <span className="feature-icon">
              <Icon name="target" />
            </span>
            <div>
              <h3>One question at a time</h3>
              <p>
                Stay focused. Choose the answer you
                <br className="desktop-break" /> think fits best, then move
                forward.
              </p>
            </div>
          </article>
          <article>
            <span className="feature-icon">
              <Icon name="bolt" />
            </span>
            <div>
              <h3>Learn as you go</h3>
              <p>
                Get instant feedback on every answer.
                <br className="desktop-break" /> Every question is a chance to
                learn.
              </p>
            </div>
          </article>
          <article>
            <span className="feature-icon">
              <Icon name="trophy" />
            </span>
            <div>
              <h3>Make progress, not perfect</h3>
              <p>
                See your score, try again, and turn
                <br className="desktop-break" /> those tricky topics into
                strengths.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
