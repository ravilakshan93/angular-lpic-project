import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AllMcquestion } from '../shared/all-mcquestions';
import { AllScQuestions } from '../shared/all-sc-questions';
import { AllFillInQuestions } from '../shared/all-fill-in-questions';

//Services
import { McServiceService } from '../shared/mc-service.service';
import { ScServiceService } from '../shared/sc-service.service';
import { FiServiceService } from '../shared/fi-service.service';


@Component({
  selector: 'app-start-test-modus',
  templateUrl: './start-test-modus.component.html',
  styleUrls: ['./start-test-modus.component.css']
})
export class StartTestModusComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  scquestions: AllScQuestions[] //questionPool = 0
 mcquestions: AllMcquestion[] //questionPool = 1
  fiquestions: AllFillInQuestions[] //questionPool = 2

  aktuelleQuestionPool: AllMcquestion | AllScQuestions | AllFillInQuestions
  questionsArrayIndex: number = 1

  private allQuestions = [];

  // randomQuestionPool: number;
  // randomQuestionId: number;

  questionPool: number = 0;
  questionId: number = 1;

  showQuestionsEinzel: boolean = true
  auswertung: boolean = false;
  triedQuestions = 7


//   constructor(
//     private mcQuest: McServiceService = new McServiceService(),
//     private scQuest: ScServiceService = new ScServiceService(),
//     private fiQuest: FiServiceService = new FiServiceService()
//   ) { }
  
   ngOnInit(): void {
//     this.mcquestions = this.mcQuest.getAllMcQuest();
//     this.scquestions = this.scQuest.getAllScQuest();
//     this.fiquestions = this.fiQuest.getAllFiQuest();
//     // this.randomize();
//   }

//   nextQuestion() {
//     let bearbeitet: boolean = false;//wurde schon ein if getroffen?
//     //Wenn letzte frage SC dann erste Frage MC
//     if (this.questionPool == 0 && this.questionId == this.scquestions.length && bearbeitet == false) {
//       this.questionId = 1;
//       this.questionPool = 1;
//       bearbeitet = true;
//     }

//     //Wenn letzte Frage MC dann erste Frage FI
//     if (this.questionPool == 1 && this.questionId == this.mcquestions.length && bearbeitet == false) {
//       this.questionId = 1;
//       this.questionPool = 2;
//       bearbeitet = true;
//     }

//     //Wenn letzte Frage FI dann ende
//     if (this.questionPool == 2 && this.questionId == this.fiquestions.length && bearbeitet == false) {
//       console.log(this.auswertung);
//       this.checkedAnswer();
//       this.auswertung = true;
//       bearbeitet = true;
//     }

//     if (!bearbeitet) {
//       this.questionId++;
//     }

//     // if(){
//     //   //7 Versuche
//     // }
//   }

//   //Previous Button
//   prevQuestion() {
//     let bearbeitet: boolean = false;
//     //Wenn erste frage SC dann  macht gar nichts
//     if (this.questionPool == 0 && this.questionId == 1 && bearbeitet == false) {
//       bearbeitet = true;
//     }

//     //Wenn erste Frage MC dann letze Frage SC
//     if (this.questionPool == 1 && this.questionId == 1 && bearbeitet == false) {
//       this.questionId = this.scquestions.length;
//       this.questionPool = 0;
//       bearbeitet = true;
//     }

//     //Wenn erste Frage FI dann letze frage MC
//     if (this.questionPool == 2 && this.questionId == 1 && bearbeitet == false) {
//       this.questionId = this.mcquestions.length;
//       this.questionPool = 1;
//       bearbeitet = true;
//     }

//     if (!bearbeitet) {
//       this.questionId--;
//     }

//   }

//   // info(){
//   //     console.log("QuestionPool: " + this.questionPool);
//   //     console.log("QuestionId:  " + this.questionId)
//   // }

//   //Hier werden die Antworten gespeichert in der Frage selber für MultipleChoiceFragen
//   mcSaveAnswer(op: string, questionId: number) {
//     for (let q of this.mcquestions) {
//       if (q.id == questionId) {
//         console.log(q.geAnswer);
//         q.geAnswer = this.mcAddGeAns(q, op[0])
//         console.log(q.geAnswer);
//       }
//     }
//   }

//     //Hier werden überprüft of gegebenen Antworten hinzugefügt oder entfernt wird.
//     mcAddGeAns(q: AllMcquestion, op: string) {
//       let newAnswers: string = "";
//       if (q.geAnswer.includes(op)) {
//         //Wenn die zweite Antwort geklickt ist und wieder abgewählt wird
//         for (let ele of q.geAnswer) {
//           if (ele != op) {
//             newAnswers += ele;
//           }
//         }
//       }
//       else {
//         newAnswers = q.geAnswer;
//         newAnswers += op;
//       }
//       return newAnswers;
//     }


//   //Hier werden die Antworten gespeichetr in der Frage selber für SingleChoiceFragen
// scSaveAnswer(o: string, questionId: number){
//   for (let sc of this.scquestions){
//     if (sc.id == questionId){
//       console.log(sc.scAnswer);
//       sc.scAnswer = this.scAddGeAns(sc, o[0])
//       console.log(sc.scAnswer);
//     }
//   }

// }

// scAddGeAns(sc: AllScQuestions, o:string){
//   let scNewAnswer: string = "";
//   if(sc.scAnswer.includes(o)){
//     for(let ele of sc.scAnswer){
//      if(ele != o){
//       scNewAnswer += ele;
//      }
//     }
//   }
//   else{
//     scNewAnswer = sc.scAnswer;
//     scNewAnswer += o;
//   }
//   return scNewAnswer;
// }


//   //Hier werden die Antworten gespeichetr in der Frage selber für FillIn Fragen
//   isChecked(option: string, geAnswer: string): boolean {
//     {
//       if (geAnswer.includes(option)) {
//         return true;
//       }
//       else {
//         return false;
//       }
//     }
//   }


//   checkedAnswer() {
//     // this.questionPool
//     // this.questionId
//     //   for (let mcQ of this.mcquestions) {
//     //     for (let answer of mcQ.geAnswer) {
//     //       for (let sol of mcQ.solutions) {
//     //         if(sol[0] == answer[0]){

//     //         }

//     //       }
//     //     }
//     //   }
//     // }

//     let shortSolution: string = "";
//     let foundError: boolean = false;

//     //Für alle MultipleChoiceFragen
//     for (let mcq of this.mcquestions) {
//       if (mcq.geAnswer == "") {
//         mcq.uebersprungen = true;
//       } else {

//         // Kurzfassung der Antworten erstellen
//         for (let ele of mcq.solutions) {
//           shortSolution += ele[0];
//         }

//         //Fehler wenn in den Antworten ein Wert ist der nicht in der Lösung ist =>Ant: "ABC" Lösung: "BCD" => A wird als Fehler gefunden
//         for (let ans of mcq.geAnswer) {
//           if (!shortSolution.includes(ans)) {
//             console.log("Fehler");
//             foundError = true;
//           }
//         }
//         //Fehler wenn in der Lösung etwas steht was in der Antwort nicht steht => Ant: "BC" Lösung: "BCD" => D als Fehler gefunden
//         for (let sSol of shortSolution) {
//           if (!mcq.geAnswer.includes(sSol)) {
//             console.log("Fehler");
//             foundError = true;
//           }
//         }
//         //Ob die Frage richtig oder falsch beantwort wurde, wird in der Frage geschrieben
//         if (!foundError) {
//           mcq.correct = true;
//         } else {
//           mcq.correct = false;
//         }
//       }
//     }
//   }


//   openPopUp() {
//     document.getElementById("popupForm").style.display = "block";
//   }
  
//   cancelPopUp() {
//     document.getElementById("popupForm").style.display = "none";
//   }
}
}






// --------Gemischte Frageb für den Prüfungsmodus---------------------
//Mit der Funktion randomsize werden die Fragen gemischt. 
//Die Fragen werden durch die If abfragen durchlaufen und enhält keine 0 
  // randomize() {
  //   this.randomQuestionPool = this.getRandomInt(3);
  //   let random = 0;
  //   if(this.randomQuestionPool == 0)
  //   {
  //     //sc
  //     if(random == 0){
  //       random = this.getRandomInt(this.scquestions.length + 1);
  //     }
  //     this.randomQuestionId = random;

  //   } else if ( this.randomQuestionPool == 1)
  //   {
  //     //mc
  //     if(random == 0){
  //       random = this.getRandomInt(this.mcquestions.length + 1);
  //     }
  //     this.randomQuestionId = random;
  //   } else if ( this.randomQuestionPool== 2){
  //     //fi
  //     if(random == 0){
  //       random = this.getRandomInt(this.fiquestions.length + 1);
  //     }
  //     this.randomQuestionId = random;
  //   }
  // }

  // getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }


