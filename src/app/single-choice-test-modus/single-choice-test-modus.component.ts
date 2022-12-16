import { Component, OnInit } from '@angular/core';
import { ScServiceService } from '../shared/sc-service.service';
import { AllScQuestions, ScAnswer } from '../shared/all-sc-questions';


@Component({
  selector: 'app-single-choice-test-modus',
  templateUrl: './single-choice-test-modus.component.html',
  styleUrls: ['./single-choice-test-modus.component.css']
})
export class SingleChoiceTestModusComponent implements OnInit {

  constructor(private scquestion: ScServiceService) { }
  scQuest: AllScQuestions[]
  questionId: number = 1;
  questionLives = 7
  questionSavedSkip = 0
  questionSavedCorrectAnswer = 0
  scAnswer = []
  questionPosNr: number;
  auswertung: boolean = false;
  rightSc: number = 0;
  wrongSc: number = 0;
  skippedSc: number = 0;
  hidden: boolean = true;



  ngOnInit(): void {
    this.scQuest = this.scquestion.getAllScQuest();
  }


  toggleAuswertung() {
    this.updateScCorrect();
    this.updateScSkipped()
    this.auswertung = !this.auswertung;
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }


  radioAnswer(radioOptions: string[]) {
    this.questionPosNr = this.scAnswer.indexOf(radioOptions)

    if (this.questionPosNr == -1) {
      this.scAnswer.push(radioOptions)
    }
    else {
      this.scAnswer.splice(this.questionPosNr, 1)
    }
    console.log(this.questionPosNr)
    console.log(this.scAnswer)
  }

  //Next Question Single Choice Fragen
  nextScQuestion(currentQuestion: AllScQuestions) {
    //Ob die Frage richtig beantwortet
    currentQuestion.Uebersprungen = false
    let isCorrect = this.isCorrectSc(currentQuestion);
    //Wenn die Frage Falsch beantwortrt wurde  =>
    //Ein Leben abziehen 

    if (!isCorrect) {
      this.wrongSc++
      this.questionLives--;
      this.displayPopUp(1);
      if (this.questionLives == 0) {
        this.displayPopUp(0);
      }
      this.makeScUnchoosen(currentQuestion);
      for (let ele of this.scQuest) {
        if (ele.id == (currentQuestion.id - 1)) {
          this.makeScUnchoosen(ele);
        }
      }
      if (this.questionId > 1) {
        this.questionId--;
      }
    } else {
        currentQuestion.answered = 0;
        this.questionId++;
      if (currentQuestion.id == this.scQuest.length) {
        this.toggleAuswertung();
      }
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

  wasAnswered(question: AllScQuestions, answer: string) {
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


  isCorrectSc(question: AllScQuestions): boolean {
    console.log(question);
    let correct: boolean = true;
    for (let ele of question.Answer) {
      console.log(ele.txt);
      if ((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) {
        correct = false;
      }
    }
    return correct;
  }

  answerChoosen(ele: ScAnswer) {
    ele.choosen = !ele.choosen;
  }

  //Previous Question
  prevScQuestion(id: number) {
    if (this.questionId == id) {
      this.questionId -= 1;
    } if (this.questionId == 0) {
      this.questionId = 1
    }
  }

  skipScQuestion(question: AllScQuestions) {
    question.Uebersprungen = true;
    if (question.id < this.scQuest.length) {
      this.questionId++;
    } else {
      this.toggleAuswertung();
    }
  }

  updateScCorrect() {
    for (let ele of this.scQuest) {
      if (ele.answered == 0) {
        this.rightSc++;
      }

    }
  }

  updateScSkipped() {
    for (let ele of this.scQuest) {
      if (ele.Uebersprungen == true) {
        this.skippedSc++;
      }
    }
  }


  displayPopUp(y: number) {
    if (y == 0) {
      this.questionLives = 0;
      confirm("Sie haben keine Leben mehr! \n Gehen Sie hier hin und machen sich schlau, nutzen Sie den Roten Button in Ihrer Darstellung");
      this.toggleHidden();
    } else if (y == 1) {
      if (confirm("Die Antwort war geraten!")) {
        console.log("Hier kommt der Code hin der ausgeführt wird wenn das Popup bestätigt wird");
      }
    }
  }

  choosenAnswer(options: ScAnswer) {
    options.choosen = !options.choosen;
  }
}














