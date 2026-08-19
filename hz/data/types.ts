// ─────────────────────────────
//  Data Types
// ─────────────────────────────

export interface Topic {
  id: string;
  title: string;
  grade: number;
  image?: string;
  content: string; // HTML with LaTeX
}

export interface Section {
  id: string;
  title: string;
  topics: Topic[];
}

export interface SubjectData {
  subject: string;
  title: string;
  icon: string;
  color: string;
  colorRgb: string;
  sections: Section[];
}

export type SubjectKey = 'algebra' | 'geometry' | 'physics' | 'history' | 'chemistry' | 'geography';

export interface SearchResult {
  subjectKey: SubjectKey;
  subjectTitle: string;
  subjectColor: string;
  subjectIcon: string;
  sectionId: string;
  sectionTitle: string;
  topicId: string;
  topicTitle: string;
  grade: number;
}
