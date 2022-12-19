export interface AllFillInQuestions {
    id: number;
    marker: string; // fi sc mc
    question: string;
    solution: string;
    answer?: string;
    Uebersprungen: boolean;
    CorrectAnswer: boolean;
    WrongAnswered:boolean;
}

