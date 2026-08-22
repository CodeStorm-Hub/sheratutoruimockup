'use client';

import React from 'react';
import { Tag } from '@/components/Tag';
import { PageHeader } from '@/components/PageHeader';
import { achievementsData } from '@/data/mockData';

export const AchievementsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Achievements"
        description="The effort you put in deserves to be seen."
      />
      <div className="achievement-hero">
        <div>
          <Tag color="sun">LEVEL 12 · RISING SCHOLAR</Tag>
          <h2>2,840 XP</h2>
          <p>160 XP to your next level</p>
          <i>
            <em />
          </i>
        </div>
        <span>🏆</span>
      </div>
      <div className="achievement-grid">
        {achievementsData.map((x) => (
          <article key={x.title}>
            <span>{x.icon}</span>
            <Tag color="mint">UNLOCKED</Tag>
            <h3>{x.value}</h3>
            <b>{x.title}</b>
            <p>{x.description}</p>
          </article>
        ))}
      </div>
    </>
  );
};
