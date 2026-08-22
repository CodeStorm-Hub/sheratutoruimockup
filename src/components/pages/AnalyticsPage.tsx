'use client';

import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Tag } from '@/components/Tag';
import { PageHeader } from '@/components/PageHeader';
import { BarChart } from '@/components/BarChart';
import { subjects, mistakePatterns } from '@/data/mockData';

interface AnalyticsPageProps {
  mistakes?: boolean;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ mistakes = false }) => {
  return (
    <>
      <PageHeader
        title={mistakes ? 'Mistake analysis' : 'Your results'}
        description={
          mistakes
            ? 'Patterns from your assessments, turned into your next advantage.'
            : 'Every practice session, made visible.'
        }
      >
        <button type="button" className="primary-btn">
          Download report <ArrowUpRight size={15} />
        </button>
      </PageHeader>

      {mistakes ? (
        <div className="mistakes">
          <div className="mistake-summary">
            <div>
              <span>MARKS RECOVERABLE</span>
              <strong>+18</strong>
              <p>in your next Physics test</p>
            </div>
            <div className="mistake-orbit">
              <b>76%</b>
              <small>conceptual</small>
            </div>
          </div>
          {mistakePatterns.map((x) => (
            <article className="mistake-row" key={x.type}>
              <span className={`mistake-dot ${x.color}`} />
              <div>
                <b>{x.type}</b>
                <small>
                  {x.subject} · {x.count}
                </small>
              </div>
              <p>
                Practice this <ChevronRight size={16} />
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="results-grid">
          <article className="result-feature">
            <Tag color="mint">LATEST ASSESSMENT</Tag>
            <h2>Physics Model Test</h2>
            <div className="result-number">
              82<span>/100</span>
            </div>
            <p>+9 marks from your previous test</p>
            <button type="button" className="dark-wide">
              See full result <ChevronRight size={15} />
            </button>
          </article>
          <article className="score-history">
            <h3>Score history</h3>
            <BarChart />
          </article>
          <article className="subject-ranks">
            <h3>Subject performance</h3>
            {subjects.map((x) => (
              <div key={x.subject}>
                <span>{x.subject}</span>
                <i>
                  <em style={{ width: `${x.value}%` }} />
                </i>
                <b>{x.value}%</b>
              </div>
            ))}
          </article>
        </div>
      )}
    </>
  );
};
