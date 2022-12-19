export interface AllMcquestion {
    id: number;
    marker: string; // fi sc mc
    question: string;
    infoText: string;
    allAnswer : Answer[];
    uebersprungen:boolean;
    answered?:number; //0=> right, 1=>wrong
}



export interface Answer{
    txt:string;
    choosen:boolean;
    right: boolean;
}