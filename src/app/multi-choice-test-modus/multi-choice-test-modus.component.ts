import { Component, OnInit } from '@angular/core';
import { McServiceService } from '../shared/mc-service.service';
import { AllMcquestion, Answer } from '../shared/all-mcquestions';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-multi-choice-test-modus',
  templateUrl: './multi-choice-test-modus.component.html',
  styleUrls: ['./multi-choice-test-modus.component.css']
})

export class MultiChoiceTestModusComponent implements OnInit {
  mcQuest: AllMcquestion[]
  questionId: number = 1;
  questionLives: number = 7
  questionSavedSkip = 0
  questionSavedCorrectAns = 0
  mcAnswer = [];
  questionPosNr: number;
  auswertung: boolean = false;
  rightMc: number = 0;
  wrongMc: number = 0;
  skippedMc: number = 0;
  hidden: boolean = true;
  
  constructor(private mcquestion: McServiceService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.mcQuest = this.mcquestion.getAllMcQuest();
  }

  toggleAuswertung() {
    this.updateRight();
    this.updateskipped()
    this.auswertung = !this.auswertung;
    // this.checkAnswersMc();
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

  //Überprüft wenn die Antworten geklickt wurde und speichert in konsole.
  checkAnswer(options: string[]) {
    this.questionPosNr = this.mcAnswer.indexOf(options)

    if (this.questionPosNr == -1) {
      this.mcAnswer.push(options)
    }
    else {
      this.mcAnswer.splice(this.questionPosNr, 1)
    }
    console.log(this.questionPosNr)
    console.log(this.mcAnswer)
  }



  //Stand 2022-12-15-11-00-refactored
  //Next Question 
  nextQuestion(currentQuestion: AllMcquestion) {
    //wurde die Frage korrekt beantwortet?
    currentQuestion.uebersprungen = false;
    let isCorrect = this.isCorrectMc(currentQuestion);
    //Wenn die Frage Falsch beantwortet wurde =>
    //Ein Leben abziehen
    if (!isCorrect) {
      this.wrongMc++;
      this.questionLives--;
      this.clickMethod(1);
      if (this.questionLives == 0) {
        this.clickMethod(0);
      }
      this.makeMcUnchoosen(currentQuestion);
      for (let ele of this.mcQuest) {
        if (ele.id == (currentQuestion.id - 1)) {
          this.makeMcUnchoosen(ele);
        }
      }
      if (this.questionId > 1) {
        this.questionId--;
      }
    } else {
      currentQuestion.answered = 0;
      this.questionId++;
      if (currentQuestion.id == this.mcQuest.length) {
        //Letzte Frage + Next //Debuggen!!
        this.toggleAuswertung();
      }
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



  Info(q: AllMcquestion) {
    console.log(q);
  }


  // isCorrectMc(question: AllMcquestion) {
  //   let rightCounter = 0;
  //   for (let sol of question.solutions) {
  //     for (let geAns of question.geAnswer) {
  //       if (sol == geAns) {
  //         rightCounter++;
  //       }
  //     }
  //   }
  //   if (rightCounter == question.solutions.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  isCorrectMc(question: AllMcquestion): boolean {
    console.log(question);
    let right: boolean = true;
    for (let ele of question.allAnswer) {
      console.log(ele.txt);
      if ((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) {
        right = false;
      }
    }
    return right;
  }

  // addToGeAnsMC(question: AllMcquestion, geAns: string) {
  //   let newGegAns: string[] = [];
  //   let wasReplaced: boolean = false;
  //   for (let i = 0; i < question.geAnswer.length; i++) {
  //     if (question.geAnswer[i] == geAns) {
  //       console.log("Antwort wurde entfernt");
  //       wasReplaced = true;
  //     }
  //     newGegAns.push(question.geAnswer.pop());
  //   }
  //   if (!wasReplaced) {
  //     newGegAns.push(geAns);
  //   }
  //   question.geAnswer = newGegAns;
  // }

  answerChoosen(ele: Answer) {
    ele.choosen = !ele.choosen;
  }

  //Prev Question
  prevQuestion(id: number) {
    if (this.questionId == id) {
      this.questionId -= 1;
    } if (this.questionId == 0) {
      this.questionId = 1
    }
  }

  skipQuestion(quest: AllMcquestion) {
    quest.uebersprungen = true;
    if (quest.id < this.mcQuest.length) {
      this.questionId++;
    } else {
      this.toggleAuswertung();
    }
  }

  updateskipped() {
    for (let ele of this.mcQuest) {
      if (ele.uebersprungen == true) {
        this.skippedMc++;
      }
    }
  }

  updateRight() {
    for (let ele of this.mcQuest) {
      if (ele.answered == 0) {
        this.rightMc++;
      }

    }
  }

  clickMethod(x: number) {
    if (x == 0) {
      this.questionLives = 0;
      confirm("Sie haben keine Leben mehr! \n Gehen Sie hier hin und machen sich schlau, nutzen Sie den Roten Button in Ihrer Darstellung");
      this.toggleHidden();
    } else if (x == 1) {
      if (confirm("Die Antwort war geraten!")) {
        console.log("Hier kommt der Code hin der ausgeführt wird wenn das Popup bestätigt wird");
      }
    }
  }
}

