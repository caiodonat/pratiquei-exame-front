
export interface IAlternative {
  description: string;
  isCorrect: boolean;
}

export interface IQuestion {
  description: string;
  alternatives: Array<IAlternative>;
}

export class Exam {
  public title!: string;
  public code!: string;
  public questions: Array<IQuestion> = [
    {
      description: "",
      alternatives: []
    }
  ];
}
