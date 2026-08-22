import React from 'react';

interface ScoreRingProps {
  value: number | string;
}

export const ScoreRing: React.FC<ScoreRingProps> = ({ value }) => {
  return (
    <div className="score-ring" style={{ '--score': Number(value) } as React.CSSProperties}>
      <div>
        <strong>{value}</strong>
        <span>%</span>
      </div>
    </div>
  );
};
