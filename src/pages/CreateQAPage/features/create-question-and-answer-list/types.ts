export type Question = {
  id: number;
  question: string;
  answers: Answer[];
  hidden: boolean
}

export type Answer = {
  answer: string;
  isTrue: boolean;
}