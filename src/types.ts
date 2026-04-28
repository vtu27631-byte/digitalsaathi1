export type Category = 'basics' | 'security';
export type SimulationType = 'whatsapp' | 'upi' | 'banking' | 'shopping' | 'email' | 'desktop' | 'browser' | 'folder' | 'app-install';

export interface Scenario {
  id: string;
  title: string;
  category: Category;
  type: SimulationType;
  saathiIntro: string;
  saathiPrompt: string;
  content: any;
  correctAction: string;
  correctActionLabel?: string;
  wrongActions: {
    id: string;
    label?: string;
    alertTitle: string;
    alertMessage: string;
    explanation: string;
  }[];
  successMessage: string;
  successExplanation: string;
  translations?: {
    [key in Language]?: {
      title?: string;
      saathiIntro?: string;
      saathiPrompt?: string;
      successMessage?: string;
      successExplanation?: string;
      content?: any;
      wrongActions?: {
        id: string;
        label?: string;
        alertTitle: string;
        alertMessage: string;
        explanation: string;
      }[];
      correctActionLabel?: string;
    };
  };
}

export type Language = 'english' | 'hindi' | 'tamil' | 'telugu' | 'kannada';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface UserState {
  name: string;
  language: Language;
  completedScenarios: string[];
  currentScenarioId: string | null;
  riskLevel: 'Beginner' | 'Learning' | 'Safe User';
}
