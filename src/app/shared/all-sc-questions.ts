export interface AllScQuestions {
    id: number;
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


