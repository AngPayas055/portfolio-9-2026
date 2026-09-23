"use client";

type LoadingScreenProps = {
  onSkip: () => void;
};

export default function LoadingScreen({ onSkip }: LoadingScreenProps) {
  return (
    <div
      className="loading-screen"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loading-grain" aria-hidden="true" />

      <div className="loading-content">
        <span className="loading-overline">
          JHON REY MENDIOLA / PORTFOLIO
        </span>

        <div className="loading-perspective" aria-hidden="true">
          <div className="loading-halo" />

          <div className="loading-cube">
            <div className="loading-face loading-front">
              JM<span>.</span>
            </div>
            <div className="loading-face loading-back">
              JM<span>.</span>
            </div>
            <div className="loading-face loading-right">
              JM<span>.</span>
            </div>
            <div className="loading-face loading-left">
              JM<span>.</span>
            </div>
            <div className="loading-face loading-top">✳</div>
            <div className="loading-face loading-cube-bottom">✳</div>
          </div>
        </div>

        <div className="loading-bottom">
          <span>INITIALIZING IDEAS</span>
          <span>PLEASE WAIT</span>
        </div>

        <div className="loading-track">
          <span />
        </div>
      </div>

      <button className="loading-skip" onClick={onSkip}>
        Skip intro ↗
      </button>
    </div>
  );
}