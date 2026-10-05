import { useState } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Quiz from "./Quiz";
import { Icon } from "./Icons";

export default function QuizApp({ questions = [], status = "loading", dispatch, index = 0 }) {
  const [consoleOpen, setConsoleOpen] = useState(true);
  const numQuestions = questions.length || 0;
  const progressPercent = numQuestions > 0 ? Math.round(((index + (status === "active" ? 1 : 0)) / numQuestions) * 100) : 0;

  return (
    <div className="quiz-app-dashboard">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <div className="dashboard-container">
        <div className="dashboard-grid">
          {/* LEFT SIDEBAR: RUNTIME STATUS & PROGRESS (TELEMETRY) */}
          <aside className="status-sidebar-panel" aria-label="Status & Progress Panel">
            <div className="panel-header">
              <span className="panel-title-tag">SYSTEM TELEMETRY</span>
              <h2 className="panel-heading">Runtime Status</h2>
            </div>

            {/* STATUS DISPLAY */}
            <div className={`status-display-card status-${status}`}>
              <div className="status-indicator-row">
                <span className={`status-beacon beacon-${status}`} />
                <div className="status-text-meta">
                  <span className="status-label">CURRENT STATUS</span>
                  <span className="status-value">{status.toUpperCase()}</span>
                </div>
              </div>

              {status === "loading" && (
                <div className="sidebar-loader-preview">
                  <div className="charcoal-spinner-mini" />
                  <span>Synchronizing payload...</span>
                </div>
              )}
            </div>

            {/* PROGRESS BAR (Deep Forest Green #325C51) */}
            <div className="progress-section">
              <div className="progress-meta-row">
                <span className="progress-label">QUESTION PROGRESS</span>
                <span className="progress-count">
                  {status === "active" ? index + 1 : status === "ready" ? 0 : index} of {numQuestions}
                </span>
              </div>
              <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
                <div
                  className="progress-fill"
                  style={{ width: `${status === "active" ? Math.max(7, progressPercent) : 0}%` }}
                />
              </div>
              <div className="progress-percentage">
                <span>{status === "active" ? progressPercent : 0}% COMPLETED</span>
                <span>INDEX: [{index}]</span>
              </div>
            </div>

            {/* METRICS DECK */}
            <div className="sidebar-metrics-deck">
              <div className="metric-box">
                <span className="metric-title">TOTAL QUESTIONS</span>
                <span className="metric-val">{numQuestions}</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">CURRENT INDEX</span>
                <span className="metric-val">{index}</span>
              </div>
            </div>

            {/* DATA CYCLE PIPELINE */}
            <div className="pipeline-map">
              <span className="pipeline-title">DATA CYCLE PIPELINE</span>
              <div className="pipeline-steps">
                <div className={`pipeline-step ${status !== "loading" ? "done" : "active"}`}>
                  <span className="step-num">01</span>
                  <div className="step-info">
                    <span className="step-name">GET_QUESTIONS</span>
                    <span className="step-desc">HTTP GET /questions</span>
                  </div>
                </div>
                <div className={`pipeline-step ${status === "ready" ? "active" : status === "active" ? "done" : ""}`}>
                  <span className="step-num">02</span>
                  <div className="step-info">
                    <span className="step-name">DISPATCH(READY)</span>
                    <span className="step-desc">State initialized</span>
                  </div>
                </div>
                <div className={`pipeline-step ${status === "active" ? "active" : ""}`}>
                  <span className="step-num">03</span>
                  <div className="step-info">
                    <span className="step-name">ACTIVE_EVALUATION</span>
                    <span className="step-desc">Question[{index}] active</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN STAGE (RIGHT / CENTER) */}
          <main id="main-content" className="dashboard-main-stage">
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            {status === "ready" && (
              <StartScreen dispatch={dispatch} questions={questions} />
            )}
            {status === "active" && <Quiz questions={questions[index]} />}
          </main>
        </div>

        {/* BOTTOM SECTION: STATE OVERVIEW */}
        <section className="state-overview-panel" id="specs" aria-label="State Overview">
          <div className="state-overview-header">
            <div className="overview-title-group">
              <span className="overview-badge">STATE TELEMETRY</span>
              <h3 className="overview-heading">Core State Overview</h3>
            </div>
            <span className="overview-subtext">Senior Architectural State Visualization</span>
          </div>

          <div className="state-specs-grid">
            <div className="state-spec-card">
              <span className="spec-label">QUESTIONS LOADED</span>
              <div className="spec-value-row">
                <span className="spec-number">{numQuestions}</span>
                <span className="spec-tag">ITEMS</span>
              </div>
              <span className="spec-sub">Source: /questions payload</span>
            </div>

            <div className="state-spec-card">
              <span className="spec-label">CURRENT STATUS</span>
              <div className="spec-value-row">
                <span className={`status-badge-pill badge-${status}`}>
                  {status.toUpperCase()}
                </span>
              </div>
              <span className="spec-sub">useReducer state.status</span>
            </div>

            <div className="state-spec-card">
              <span className="spec-label">CURRENT INDEX</span>
              <div className="spec-value-row">
                <span className="spec-number">{index}</span>
                <span className="spec-tag">POINTER</span>
              </div>
              <span className="spec-sub">Active question: #{index + 1}</span>
            </div>

            <div className="state-spec-card">
              <span className="spec-label">DATA CYCLE FLOW</span>
              <div className="spec-value-row">
                <span className="spec-highlight">FETCH → REDUCER → VIEW</span>
              </div>
              <span className="spec-sub">Synchronized with useReducer</span>
            </div>
          </div>
        </section>
      </div>

      {/* FLOATING DATA WINDOW (DEV CONSOLE) */}
      <div className={`floating-console ${consoleOpen ? "expanded" : "collapsed"}`}>
        <div className="console-titlebar" onClick={() => setConsoleOpen(!consoleOpen)}>
          <div className="window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="console-title">
            <Icon name="code" size={13} /> DevConsole &bull; GET_QUESTIONS Trace
          </span>
          <button
            type="button"
            className="console-toggle-btn"
            aria-label="Toggle Console"
          >
            {consoleOpen ? "−" : "+"}
          </button>
        </div>

        {consoleOpen && (
          <div className="console-content">
            <div className="console-header-info">
              <span className="console-env">ENV: PRODUCTION_DEV</span>
              <span className="console-ping">HTTP 200 &bull; 8ms</span>
            </div>
            <pre className="console-code">
              <code>
{`// Live Reducer State Snapshot
{
  "endpoint": "http://localhost:8000/questions",
  "action": "${status === 'loading' ? 'FETCH_INIT' : status === 'ready' ? 'datareceved' : 'start'}",
  "status": "${status}",
  "index": ${index},
  "questions_loaded": ${numQuestions},
  "data_cycle": "FETCH -> REDUCER -> STATE -> VIEW"
}`}
              </code>
            </pre>
          </div>
        )}
      </div>

      <footer className="app-footer">
        <div className="footer-inner">
          <span>QuizApp Architecture Dashboard &bull; Warm Cream &amp; Forest Green Minimalist UI</span>
          <span>
            <Icon name="code" size={14} /> Senior Front-end Design Perspective
          </span>
        </div>
      </footer>
    </div>
  );
}
