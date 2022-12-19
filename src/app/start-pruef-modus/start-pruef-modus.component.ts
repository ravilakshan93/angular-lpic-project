import { Component, OnInit } from '@angular/core';
import { McServiceService } from '../shared/mc-service.service';
import { AllMcquestion, Answer } from '../shared/all-mcquestions';

import { ScServiceService } from '../shared/sc-service.service';
import { AllScQuestions, ScAnswer } from '../shared/all-sc-questions';

import { FiServiceService } from '../shared/fi-service.service';
import { AllFillInQuestions } from '../shared/all-fill-in-questions';
import { element } from 'protractor';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-start-pruef-modus',
  templateUrl: './start-pruef-modus.component.html',
  styleUrls: ['./start-pruef-modus.component.css']
})
export class StartPruefModusComponent implements OnInit {

  mcquestions: AllMcquestion[]
  scquestions: AllScQuestions[]
  fiquestions: AllFillInQuestions[]

  allQuestions: any = [];

  currentQuestion: any
  questionId: number = 0;
  auswertung: boolean = false;
  questionPosNr: number;
  arrayIndexOfAllQuestions: number = 119;

  wrongAnswer: number = 0;
  rightAnswer: number = 0;
  hidden: boolean = true;

  mcAnswer = [];
  rightMc: number = 0;

  scAnswer = []
  rightSc: number = 0

  skippedQuestions: number = 0

  constructor(private mQuest: McServiceService,
    private scQuest: ScServiceService,
    private fiQuest: FiServiceService) { }

  ngOnInit(): void {
    this.fiquestions = this.fiQuest.getAllFiQuest()
    this.mcquestions = this.mQuest.getAllMcQuest()
    this.scquestions = this.scQuest.getAllScQuest()
    for (let ele of this.fiquestions) {
      this.allQuestions.push(ele)
    }
    for (let ele of this.mcquestions) {
      this.allQuestions.push(ele)
    }
    for (let ele of this.scquestions) {
      this.allQuestions.push(ele)
    }

    this.questionId = 0;
    this.currentQuestion = this.allQuestions[this.arrayIndexOfAllQuestions]
  }

  toggleAuswertung() {
    this.updateRight();
    this.auswertung = !this.auswertung;
    // this.checkAnswersMc();
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

  //MultipleChoiceQuestions Funktionen 
  isCorrectMc(question: AllMcquestion): boolean {
    let right: boolean = true;
    for (let ele of question.allAnswer) {
      if ((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) {
        right = false;
      }
    }
    return right;
  }
  checkAnswer(options: string[]) {
    this.questionPosNr = this.mcAnswer.indexOf(options)

    if (this.questionPosNr == -1) {
      this.mcAnswer.push(options)
    }
    else {
      this.mcAnswer.splice(this.questionPosNr, 1)
    }

  }


  QuestionCorrectAnswered(quest: AllMcquestion) {
    quest.answered == 0;
    this.questionId++;

  }

  makeMcUnchoosen(quest: AllMcquestion) {
    quest.answered = undefined;
    for (let ele of quest.allAnswer) {
      ele.choosen = false;
    }
  }

  wasAnswered(question: AllMcquestion, ans: string) {
    for (let q = 0; q < question.allAnswer.length; q++) {
      if (question.allAnswer[q].txt == ans) {
        return true;
      }
      return false;
    }
  }

  isChecked(option: string, geAnswer: string): boolean {
    {
      if (geAnswer.includes(option)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  answerChoosen(ele: Answer) {
    ele.choosen = !ele.choosen;
  }

  updateskipped() {
    for (let ele of this.allQuestions) {
      if (ele.uebersprungen == true) {
        this.skippedQuestions++;
      }
    }
  }

  updateRight() {
    for (let ele of this.allQuestions) {
      if (ele.answered == 0) {
        this.rightMc++;
      }

    }
  }

  //SingleChoiceQuestions Funktionen 
  isCorrectSc(question: AllScQuestions): boolean {
    let right: boolean = true;
    for (let ele of question.Answer) {
      if ((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) {
        right = false;
      }
    }
    return right;
  }


  radioAnswer(radioOptions: string[]) {
    this.questionPosNr = this.scAnswer.indexOf(radioOptions)

    if (this.questionPosNr == -1) {
      this.scAnswer.push(radioOptions)
    }
    else {
      this.scAnswer.splice(this.questionPosNr, 1)
    }

  }

  questionCorrectAnswered(questions: AllScQuestions) {
    questions.answered == 0;
    this.questionId++;
  }


  makeScUnchoosen(questions: AllScQuestions) {
    questions.answered = undefined;
    for (let ele of questions.Answer) {
      ele.choosen = false;
    }
  }

  wasScAnswered(question: AllScQuestions, answer: string) {
    for (let quest = 0; quest < question.Answer.length; quest++) {
      if (question.Answer[quest].txt == answer) {
        return true
      }
      return false;
    }
  }

  isAnswered(options: string, answer: string): boolean {
    {
      if (answer.includes(options)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  choosenAnswer(options: ScAnswer) {
    options.choosen = !options.choosen;
  }


  //Fill in Questions
  isCorrectFi(question: AllFillInQuestions): boolean {
    let right: boolean = false;
    if (question.answer && (question.answer == question.solution)) {
      right = true;

    }
    return right;
  }



  // NEXT, PREV und SKIP Funktionen
  nextQuestion(cQuestion: any) {
    let isCorrect = false;
    if (cQuestion.marker == "fi") {
      //fi stuff
      if (!cQuestion.answer) {
        cQuestion.CorrectAnswer = false;
        cQuestion.WrongAnswered = false;
        cQuestion.Uebersprungen = true;
      } else {
        isCorrect = this.isCorrectFi(cQuestion);
        if (isCorrect == true) {
          cQuestion.CorrectAnswer = true;
          cQuestion.WrongAnswered = false;
          cQuestion.Uebersprungen = false;
        } else {
          cQuestion.CorrectAnswer = false;
          cQuestion.WrongAnswered = true;
          cQuestion.Uebersprungen = false;
        }
      }
    } else if (cQuestion.marker == "mc") {
      //mc stuff
      isCorrect = this.isCorrectMc(cQuestion);
      if (isCorrect) {
        cQuestion.answered = 0; // richtig
      } else {
        cQuestion.answered = 1; //falsch
      }
      if (cQuestion.answer != 0 && cQuestion.answer != 1) {
        cQuestion.answer = 2;
      }
    } else if (cQuestion.marker == "sc") {
      isCorrect = this.isCorrectSc(cQuestion);
      if (cQuestion.CorrectAnswer == false && cQuestion.wrongAnswer == false) {
        cQuestion.CorrectAnswer = false;
        cQuestion.wrongAnswer = false;
        cQuestion.Uebersprungen = true;
      }else
      if (isCorrect == true) {
        cQuestion.CorrectAnswer = true;
        cQuestion.wrongAnswer = false;
        cQuestion.Uebersprungen = false;
      } else {
        cQuestion.CorrectAnswer = false;
        cQuestion.wrongAnswer = true;
        cQuestion.Uebersprungen = false;
      }


    }
    if (this.arrayIndexOfAllQuestions == (this.allQuestions.length - 1)) {
      //alert("auswetung");
      
      this.toggleAuswertung()
    }
    else {


      this.arrayIndexOfAllQuestions++
      this.currentQuestion = this.allQuestions[this.arrayIndexOfAllQuestions];
    }
    this.UpdateCounters();


    if (this.wrongAnswer >= (this.allQuestions.length / 5)) {
      this.UpdateCounters();
      this.displayPopUp();
    }

  }

checkScQuestion(scq:AllScQuestions){
    let right=false;
    for(let ele of scq.Answer){
      if(ele.choosen == true){
        scq.Uebersprungen=false;
        scq.WrongAnswered=false;
        scq.CorrectAnswer=false;
        if(ele.right){
          scq.WrongAnswered=false;
          scq.CorrectAnswer=true;
          scq.Uebersprungen= false
        }else {
          scq.WrongAnswered=true;
          scq.CorrectAnswer=false;
          scq.Uebersprungen= false
        }
      }
    }
  }


  checkMcQuestion(mcq:AllMcquestion){
    let uebersprungen = true;
    let wrong= false;  
    for(let ele of mcq.allAnswer){
      if(ele.choosen){
        uebersprungen=false;
        if((!ele.choosen && ele.right)||(ele.choosen && !ele.right)){
          wrong=true
        }
      }
    }
    if(uebersprungen){
      mcq.uebersprungen=true;
    } else if (wrong==false){
      mcq.answered=0;
    } else {
      mcq.answered=1;
    }
  }

  checkFiQuestion(fiq: AllFillInQuestions){

    if(!fiq.answer){
      fiq.Uebersprungen = true;
      fiq.WrongAnswered = false
      fiq.CorrectAnswer = false;
    }
    else if(fiq.solution == fiq.answer){

      fiq.Uebersprungen = false;
      fiq.WrongAnswered = false
      fiq.CorrectAnswer = true;
    }
    else{
      fiq.Uebersprungen = false;
      fiq.WrongAnswered = true
      fiq.CorrectAnswer = false;
    }
  }



  UpdateCounters() {
    this.wrongAnswer = 0;
    this.rightAnswer = 0;
    this.skippedQuestions = 0;
    for (let ele of this.scquestions) {
      this.checkScQuestion(ele);
      if(ele.CorrectAnswer){
        this.rightAnswer++;
      } else if(ele.Uebersprungen){
        this.skippedQuestions++;
      } else if(ele.WrongAnswered){
        this.wrongAnswer++;
      }
    }
    for (let ele of this.mcquestions) {
      this.checkMcQuestion(ele)
      if(ele.answered == 0){
        this.rightAnswer++
      }
      else if(ele.answered == 1){
        this.wrongAnswer--
      }

    }

    for (let ele of this.fiquestions) {
      if (ele.Uebersprungen) {
        this.skippedQuestions++;
      } else if (ele.WrongAnswered) {
        this.wrongAnswer++;
      } else {
        this.rightAnswer++;
      }
    }   
    
    
  
  }









  prevQuestion() {

    if (this.arrayIndexOfAllQuestions > 0) {
      this.arrayIndexOfAllQuestions--;
      this.currentQuestion = this.allQuestions[this.arrayIndexOfAllQuestions];
    }

  }


  skipQuestion(cQuest: AllMcquestion) {

    cQuest.uebersprungen = true;
    if (this.questionId < this.allQuestions.length) {
      this.questionId++;
    } else {
      this.toggleAuswertung();
    }
  }

  displayPopUp() {
    confirm("20% Ihrer Antworten waren falsch, back to learn!");
  }
}
