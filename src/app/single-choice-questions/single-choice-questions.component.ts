import { Component, OnInit } from '@angular/core';
import { AllScQuestions } from '../shared/all-sc-questions'
import { ScServiceService } from '../shared/sc-service.service';


@Component({
  selector: 'app-single-choice-questions',
  templateUrl: './single-choice-questions.component.html',
  styleUrls: ['./single-choice-questions.component.css']
})
export class SingleChoiceQuestionsComponent implements OnInit {
  scquestions: AllScQuestions[];
  currentSingleQuest: AllScQuestions;
  singleShowListe: boolean = true; 
  singleCurrentArrayId: number = 0;
  showSolution : boolean = false;
  scService : ScServiceService = new ScServiceService();

  constructor() { }

  ngOnInit(): void {
   
  
    // this.scquestions = this.scService.getAllScQuest();
        this.currentSingleQuest = this.scquestions[0];
    }

toggleFragen(){
  this.singleShowListe = !this.singleShowListe
}


singleFirstQuest(){
  this.singleCurrentArrayId = 0
  this.currentSingleQuest = this.scquestions[this.singleCurrentArrayId]
}

showPrevSingle(){
  if(this.singleCurrentArrayId > 0){
    this.singleCurrentArrayId -= 1
    this.currentSingleQuest = this.scquestions[this.singleCurrentArrayId]
  }
}

showNextSingle(){
  if(this.singleCurrentArrayId < this.scquestions.length -1){
    this.singleCurrentArrayId += 1
    this.currentSingleQuest = this.scquestions[this.singleCurrentArrayId]
  }
}

showSingleSolution(){
  this.showSolution = !this.showSolution;
}

}