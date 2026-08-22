'use client';

import React from 'react';
import { Check, ChevronRight, Maximize2, Upload } from 'lucide-react';
import { Tag } from '@/components/Tag';
import { PageHeader } from '@/components/PageHeader';

const gradingSteps = [
  'Upload sheet',
  'Scan handwriting',
  'Analyze answers',
  'Apply board rubric',
  'Generate feedback',
];

const breakdownItems = [
  ['Content', '90%'],
  ['Concept accuracy', '80%'],
  ['Method', '75%'],
  ['Presentation', '92%'],
] as const;

export const GradingPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="AI grading"
        description="Upload your answer sheet and get board-style feedback in minutes."
      >
        <button type="button" className="primary-btn">
          <Upload size={16} /> Upload answer sheet
        </button>
      </PageHeader>

      <div className="grading-layout">
        <aside className="grading-steps">
          <Tag color="coral">CURRENT REVIEW</Tag>
          <h3>Physics Model Test</h3>
          {gradingSteps.map((s, i) => (
            <div
              className={`grade-step ${
                i < 3 ? 'done' : i === 3 ? 'current' : ''
              }`.trim()}
              key={s}
            >
              <span>{i < 3 ? <Check size={14} /> : i + 1}</span>
              <div>
                <b>{s}</b>
                <small>
                  {i < 3 ? 'Complete' : i === 3 ? 'In progress' : 'Waiting'}
                </small>
              </div>
            </div>
          ))}
        </aside>

        <section className="paper-view">
          <div className="viewer-tools">
            <span>
              <Maximize2 size={15} /> Page 1 of 4
            </span>
            <div>
              <button type="button">−</button>
              <b>100%</b>
              <button type="button">+</button>
            </div>
          </div>
          <div className="answer-sheet">
            <div className="paper-head">
              <b>HSC MODEL TEST EXAMINATION — 2026</b>
              <span>Physics 1st Paper · Full marks: 100</span>
            </div>
            <p>
              <b>1. </b> A body of mass 5 kg is moving with a velocity of 10
              m/s. Calculate its kinetic energy.
            </p>
            <div className="handwriting">
              Given, m = 5 kg &nbsp; and &nbsp; v = 10 ms⁻¹
              <br />
              <br />
              We know, KE = ½mv²
              <br />= ½ × 5 × 10²
              <br />= <mark>250 J</mark>
            </div>
            <div className="paper-mark good">✓ Formula correct</div>
            <div className="paper-mark bad">Missing explanation</div>
            <p>
              <b>2. </b> State the law of conservation of energy with an
              example.
            </p>
            <div className="handwriting faint">
              Energy cannot be created or destroyed but can change from one
              form to another…
            </div>
          </div>
        </section>

        <aside className="result-panel">
          <Tag color="mint">EXAMINER RESULT</Tag>
          <div className="grade-score">
            <b>8</b>
            <span>/10</span>
            <strong>A+</strong>
          </div>
          <div className="breakdown">
            <h4>Performance breakdown</h4>
            {breakdownItems.map(([label, pct]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{pct}</b>
                <i>
                  <em style={{ width: pct }} />
                </i>
              </div>
            ))}
          </div>
          <div className="notes">
            <h4>Examiner notes</h4>
            <p className="positive">✓ Formula correctly applied</p>
            <p className="positive">✓ Strong presentation</p>
            <p className="negative">✕ Explain your final answer</p>
            <p className="negative">✕ Diagram label missing</p>
          </div>
          <button type="button" className="dark-wide">
            View detailed feedback <ChevronRight size={16} />
          </button>
        </aside>
      </div>
    </>
  );
};
