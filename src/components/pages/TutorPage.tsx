'use client';

import React, { useState } from 'react';
import { Check, Lightbulb, MoreHorizontal, Plus, Send, Sparkles } from 'lucide-react';
import { Tag } from '@/components/Tag';
import { PageHeader } from '@/components/PageHeader';

export const TutorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [question, setQuestion] = useState('');

  const submit = () => {
    if (!prompt.trim()) return;
    setQuestion(prompt.trim());
    setPrompt('');
  };

  return (
    <>
      <PageHeader
        title="Your AI tutor"
        description="A focused workspace that adapts to the way you learn."
      >
        <button type="button" className="primary-btn">
          <Sparkles size={16} /> New learning session
        </button>
      </PageHeader>

      <div className="tutor-layout">
        <aside className="chapter-list">
          <Tag>PHYSICS · 1ST PAPER</Tag>
          <h3>Work, Energy & Power</h3>
          <div className="chapter-item active">
            <span>01</span> Work & energy <Check size={15} />
          </div>
          <div className="chapter-item">
            <span>02</span> Potential energy
          </div>
          <div className="chapter-item">
            <span>03</span> Conservation of energy
          </div>
          <hr />
          <small>YOUR RECENT QUESTIONS</small>
          <button type="button">Why did I lose marks here?</button>
          <button type="button">Generate board questions</button>
        </aside>

        <section className="tutor-workspace">
          <div className="tutor-top">
            <span>
              <Sparkles size={15} /> Shera, your examiner
            </span>
            <button type="button" aria-label="Tutor workspace options">
              <MoreHorizontal size={18} />
            </button>
          </div>
          <div className="tutor-message">
            <div className="shera-avatar">S</div>
            <div>
              <p>
                Let's make <b>work & energy</b> feel intuitive.
              </p>
              <p>
                Energy is the capacity to do work. When a force moves an object,
                it transfers energy — just like you transfer effort into progress.
              </p>
              <div className="equation">W = F × s × cos θ</div>
              <div className="insight">
                <Lightbulb size={17} />
                <span>
                  <b>Board tip</b> Always write the unit (Joule) after your
                  final answer.
                </span>
              </div>
            </div>
          </div>

          {question && (
            <div className="student-question">
              <span>You</span>
              <p>{question}</p>
              <small>Shera is preparing a board-style explanation…</small>
            </div>
          )}

          <div className="suggestions">
            <button
              type="button"
              onClick={() => setPrompt("Explain resonance like I'm 15")}
            >
              Explain resonance like I'm 15
            </button>
            <button
              type="button"
              onClick={() => setPrompt('Give me 10 board questions')}
            >
              Give me 10 board questions
            </button>
            <button
              type="button"
              onClick={() => setPrompt('Show a visual example')}
            >
              Show a visual example
            </button>
          </div>

          <div className="tutor-input">
            <button type="button" aria-label="Add attachment">
              <Plus size={18} />
            </button>
            <input
              value={prompt}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything about this chapter…"
            />
            <button
              type="button"
              className="send"
              onClick={submit}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
