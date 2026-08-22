import { LucideIcon } from 'lucide-react';

export type NavItem =
  | {
      label: string;
      group: true;
      icon?: undefined;
      href?: undefined;
    }
  | {
      label: string;
      group?: false;
      icon: LucideIcon;
      href: string;
      isNew?: boolean;
    };

export interface SubjectProgress {
  subject: string;
  chapter: string;
  value: number;
  color: 'mint' | 'sun' | 'coral' | 'lilac';
  icon: string;
  lesson: string;
}

export interface AchievementItem {
  value: string;
  title: string;
  description: string;
  icon: string;
}

export interface TaskItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  completed: boolean;
  time?: string;
  iconType?: 'file' | 'book' | 'number';
  numberLabel?: string;
}

export interface MistakePattern {
  type: string;
  subject: string;
  count: string;
  color: 'coral' | 'sun' | 'mint';
}
