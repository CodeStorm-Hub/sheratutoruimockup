'use client';

import React, { useState } from 'react';
import { Check, ChevronRight, Plus } from 'lucide-react';
import { Tag } from '@/components/Tag';
import { PageHeader } from '@/components/PageHeader';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const initialTasks = [
  {
    title: 'Physics MCQ practice',
    subtitle: '25 min · Work & Energy',
    time: '09:30',
    checked: true,
  },
  {
    title: 'Math: Chapter 8 review',
    subtitle: '35 min · Trigonometry',
    time: '11:00',
    checked: true,
  },
  {
    title: 'Chemistry revision',
    subtitle: '20 min · Periodic table',
    time: '16:30',
    checked: false,
  },
  {
    title: 'English writing drill',
    subtitle: '15 min · Formal letters',
    time: '19:00',
    checked: false,
  },
];

export const PlannerPage: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <PageHeader
        title="Study planner"
        description="A simple plan, shaped around your exam goals."
      >
        <button type="button" className="primary-btn">
          <Plus size={16} /> Add study task
        </button>
      </PageHeader>

      <div className="planner-top">
        <div className="streak">
          <span>🔥</span>
          <div>
            <b>7 day streak</b>
            <p>Your longest streak is 12 days — keep it up.</p>
          </div>
        </div>
        <div className="calendar-strip">
          {days.map((d, i) => (
            <span
              className={i === 3 ? 'today' : i < 3 ? 'done' : ''}
              key={`day-${i}`}
            >
              <small>{d}</small>
              <b>{17 + i}</b>
            </span>
          ))}
        </div>
      </div>

      <div className="planner-grid">
        <section className="planner-tasks">
          <h2>Today, 20 August</h2>
          {tasks.map((task, i) => (
            <div className="plan-task" key={task.title}>
              <button
                type="button"
                className={task.checked ? 'checked' : ''}
                onClick={() => toggleTask(i)}
                aria-label={`Mark ${task.title} as ${
                  task.checked ? 'incomplete' : 'complete'
                }`}
              >
                {task.checked && <Check size={15} />}
              </button>
              <div>
                <b>{task.title}</b>
                <small>{task.subtitle}</small>
              </div>
              <span>{task.time}</span>
            </div>
          ))}
        </section>

        <aside className="recommendation">
          <Tag color="coral">AI RECOMMENDATION</Tag>
          <h3>Sharpen your trigonometry</h3>
          <p>
            Most recent mistakes are step-based errors. A focused 30-minute
            review will help you recover marks.
          </p>
          <button type="button">
            See recommended plan <ChevronRight size={15} />
          </button>
          <div className="mastery">
            <span>Subject mastery</span>
            <b>72%</b>
            <i>
              <em />
            </i>
          </div>
        </aside>
      </div>
    </>
  );
};
