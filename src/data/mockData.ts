import {
  Home,
  Sparkles,
  FileCheck2,
  GraduationCap,
  Brain,
  LineChart,
  Search,
  CalendarDays,
  Target,
} from 'lucide-react';
import { NavItem, SubjectProgress, AchievementItem, MistakePattern } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Learning', group: true },
  { label: 'AI Tutor', icon: Sparkles, href: '/ai-tutor' },
  { label: 'Mock Exams', icon: FileCheck2, href: '/mock-exams' },
  { label: 'Board Simulator', icon: GraduationCap, href: '/board-simulator' },
  { label: 'Assessment', group: true },
  { label: 'AI Grading', icon: Brain, href: '/ai-grading', isNew: true },
  { label: 'Results', icon: LineChart, href: '/results' },
  { label: 'Mistake Analysis', icon: Search, href: '/mistake-analysis' },
  { label: 'Planning', group: true },
  { label: 'Study Planner', icon: CalendarDays, href: '/study-planner' },
  { label: 'Progress', icon: Target, href: '/results' },
];

export const subjects: SubjectProgress[] = [
  {
    subject: 'Physics',
    chapter: 'Work & Energy',
    value: 82,
    color: 'mint',
    icon: '⌁',
    lesson: '2 lessons left',
  },
  {
    subject: 'Chemistry',
    chapter: 'Chemical Reactions',
    value: 67,
    color: 'sun',
    icon: '⚗',
    lesson: '4 lessons left',
  },
  {
    subject: 'Higher Math',
    chapter: 'Trigonometry',
    value: 54,
    color: 'coral',
    icon: '∿',
    lesson: '6 lessons left',
  },
  {
    subject: 'English',
    chapter: 'Writing Skills',
    value: 89,
    color: 'lilac',
    icon: 'Aa',
    lesson: '1 lesson left',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    value: '7',
    title: 'Day streak',
    description: 'You showed up all week.',
    icon: '🔥',
  },
  {
    value: 'Top 10%',
    title: 'Physics',
    description: 'Among 1,240 students',
    icon: '⚡',
  },
  {
    value: '100',
    title: 'Questions solved',
    description: 'A milestone worth celebrating.',
    icon: '✦',
  },
  {
    value: 'Board ready',
    title: 'Exam confidence',
    description: 'Earned 12 August',
    icon: '✓',
  },
];

export const mistakePatterns: MistakePattern[] = [
  {
    type: 'Step-based errors',
    subject: 'Trigonometry',
    count: '8 mistakes',
    color: 'coral',
  },
  {
    type: 'Missing final units',
    subject: 'Physics',
    count: '5 mistakes',
    color: 'sun',
  },
  {
    type: 'Rushed explanations',
    subject: 'Chemistry',
    count: '4 mistakes',
    color: 'mint',
  },
];
