import React from 'react';

export const BarChart: React.FC = () => {
  return (
    <div className="chart">
      <div className="chart-grid">
        <i />
        <i />
        <i />
        <i />
      </div>
      <svg viewBox="0 0 570 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#23d9a5" stopOpacity=".24" />
            <stop offset="1" stopColor="#23d9a5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,120 C25,115 34,80 64,86 S98,106 121,97 S149,60 178,68 S207,83 234,78 S270,27 296,35 S329,72 352,60 S381,66 410,54 S438,13 466,28 S503,40 570,8 L570,150 L0,150Z"
          fill="url(#fade)"
        />
        <path
          d="M0,120 C25,115 34,80 64,86 S98,106 121,97 S149,60 178,68 S207,83 234,78 S270,27 296,35 S329,72 352,60 S381,66 410,54 S438,13 466,28 S503,40 570,8"
          fill="none"
          stroke="#23d9a5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="466" cy="28" r="5" fill="#fff" stroke="#23d9a5" strokeWidth="3" />
      </svg>
      <div className="chart-labels">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
};
