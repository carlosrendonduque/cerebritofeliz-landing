// ============================================
// src/types/index.ts
// ============================================
export interface User {
    id: string;
    email: string;
    name?: string;
  }
  
  export interface EmailCaptureData {
    email: string;
    timestamp: Date;
  }
  
  export interface LearningDomain {
    id: string;
    name: string;
    description: string;
    status: 'coming-soon' | 'active' | 'beta';
  }