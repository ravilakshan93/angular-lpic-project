export interface AllScQuestions {
    id: number;
    marker: string; // fi sc mc
    question: string;
    Answer: ScAnswer[];
    InfoText: string;
    Uebersprungen: boolean;
    CorrectAnswer: boolean;
    WrongAnswered:boolean;
    answered?;
}


export interface ScAnswer{
    txt: string;
    choosen : boolean;
    right: boolean;
}


