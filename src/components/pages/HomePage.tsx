'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ChevronRight,
  ChevronDown,
  FileCheck2,
  MoreHorizontal,
  Play,
  Sparkles,
} from 'lucide-react';
import { subjects } from '@/data/mockData';
import { ScoreRing } from '@/components/ScoreRing';
import { BarChart } from '@/components/BarChart';

export const HomePage: React.FC = () => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <section className="welcome">
        <div>
          <div className="eyebrow">
            <span /> THURSDAY, 20 AUGUST
          </div>
          <h1>
            Good evening, Anam <em>👋</em>
          </h1>
          <p>Your board-exam journey is looking stronger every day.</p>
        </div>
        <button
          type="button"
          className="focus-button"
          onClick={() => setFocused(!focused)}
        >
          <span className="focus-icon">
            <Play size={16} fill="currentColor" />
          </span>
          {focused ? 'Focus session active' : 'Start focus session'}
        </button>
      </section>

      <section className="stat-grid">
        <article className="prediction">
          <div className="stat-top">
            <span className="tag coral">BOARD PREDICTION</span>
            <MoreHorizontal size={20} />
          </div>
          <div className="prediction-main">
            <div>
              <div className="big-grade">A-</div>
              <p>Based on your last 14 assessments</p>
            </div>
            <div className="percentile">
              <b>Top 12%</b>
              <span>among HSC students</span>
              <div className="tiny-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i className="on" />
                <i className="on" />
                <i className="on" />
                <i className="on" />
                <i className="on" />
                <i className="on" />
                <i className="on" />
              </div>
            </div>
          </div>
          <div className="prediction-footer">
            <span>
              <Sparkles size={15} /> Keep this momentum going
            </span>
            <Link href="/results">
              View forecast <ChevronRight size={15} />
            </Link>
          </div>
        </article>

        <article className="readiness">
          <div className="stat-top">
            <span className="tag mint">EXAM READINESS</span>
            <MoreHorizontal size={20} />
          </div>
          <div className="readiness-content">
            <ScoreRing value="82" />
            <div>
              <b>You're on track</b>
              <p>+6% from last week</p>
              <div className="mini-progress">
                <i />
              </div>
            </div>
          </div>
        </article>

        <article className="next-exam">
          <div className="stat-top">
            <span className="tag sun">NEXT EXAM</span>
            <MoreHorizontal size={20} />
          </div>
          <div className="exam-info">
            <div className="physics-icon">ϟ</div>
            <div>
              <b>Physics</b>
              <p>1st Paper · Model Test</p>
            </div>
          </div>
          <div className="exam-date">
            <strong>12</strong>
            <span>
              days
              <br />
              remaining
            </span>
            <Link href="/mock-exams">
              <ChevronRight size={19} />
            </Link>
          </div>
        </article>
      </section>

      <section className="section-heading">
        <div>
          <h2>Continue learning</h2>
          <p>Pick up where you left off.</p>
        </div>
        <Link href="/ai-tutor">
          See all subjects <ChevronRight size={16} />
        </Link>
      </section>

      <section className="subjects">
        {subjects.map((s) => (
          <article className={`subject ${s.color}`} key={s.subject}>
            <div className="subject-top">
              <div className="subject-icon">{s.icon}</div>
              <button type="button" aria-label="More options">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <h3>{s.subject}</h3>
            <p>{s.chapter}</p>
            <div className="subject-bottom">
              <div className="progress">
                <span>
                  <i style={{ width: `${s.value}%` }} />
                </span>
                <b>{s.value}%</b>
              </div>
              <small>{s.lesson}</small>
            </div>
          </article>
        ))}
      </section>

      <section className="lower-grid">
        <article className="focus-panel">
          <div className="panel-header">
            <div>
              <h2>Today's focus</h2>
              <p>AI-curated for your best score.</p>
            </div>
            <button type="button" className="icon-button" aria-label="Focus panel options">
              <MoreHorizontal size={19} />
            </button>
          </div>
          <div className="task-list">
            <div className="task complete">
              <span>
                <FileCheck2 size={16} />
              </span>
              <div>
                <b>Physics MCQ practice</b>
                <small>20 questions · Work & Energy</small>
              </div>
              <time>25 min</time>
              <button type="button" aria-label="Open task">
                <ChevronRight size={17} />
              </button>
            </div>
            <div className="task complete">
              <span>
                <BookOpen size={16} />
              </span>
              <div>
                <b>Math: Chapter 8 review</b>
                <small>Trigonometric ratios</small>
              </div>
              <time>35 min</time>
              <button type="button" aria-label="Open task">
                <ChevronRight size={17} />
              </button>
            </div>
            <div className="task">
              <span>3</span>
              <div>
                <b>Chemistry revision</b>
                <small>Periodic table & bonding</small>
              </div>
              <time>20 min</time>
              <button type="button" aria-label="Open task">
                <ChevronRight size={17} />
              </button>
            </div>
            <div className="task">
              <span>4</span>
              <div>
                <b>English writing drill</b>
                <small>Formal letter practice</small>
              </div>
              <time>15 min</time>
              <button type="button" aria-label="Open task">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
          <button type="button" className="continue">
            <Play size={15} fill="currentColor" /> Continue today's plan{' '}
            <span>1h 35m left</span>
          </button>
        </article>

        <article className="progress-panel">
          <div className="panel-header">
            <div>
              <h2>Weekly progress</h2>
              <p>You're ahead of your usual pace.</p>
            </div>
            <button type="button" className="week-select">
              This week <ChevronDown size={15} />
            </button>
          </div>
          <div className="chart-stat">
            <div>
              <strong>11h 20m</strong>
              <span>study time</span>
            </div>
            <div className="up">↗ 18%</div>
          </div>
          <BarChart />
          <div className="chart-footer">
            <span>
              <i /> Study time
            </span>
            <b>Goal: 14h</b>
          </div>
        </article>
      </section>
    </>
  );
};
