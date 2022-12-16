import { Component, OnInit } from '@angular/core';
import { AllFillInQuestions } from '../shared/all-fill-in-questions';
import { FiServiceService } from '../shared/fi-service.service';

@Component({
  selector: 'app-fill-in-questions',
  templateUrl: './fill-in-questions.component.html',
  styleUrls: ['./fill-in-questions.component.css']
})
export class FillInQuestionsComponent implements OnInit {

  fillInQuestions : AllFillInQuestions[];
  currentFillInQuest: AllFillInQuestions;
  fillInListe : boolean = true;
  fillInCurrentArrayId: number = 0;
  fillInSolution : boolean = false;
  fillInService : FiServiceService = new FiServiceService();
  
  constructor() { }

  ngOnInit(): void {
    
    // this.fillInListe = !this.fillInQuestions[0]
    this.fillInQuestions = this.fillInService.getAllFiQuest();
  }
  toggleFillIn(){
    this.fillInListe = !this.fillInListe
  }

  fillInFirstQuest(){
    this.fillInCurrentArrayId = 0
    this.currentFillInQuest = this.fillInQuestions[this.fillInCurrentArrayId]
  }

  showFillInPrev(){
    if(this.fillInCurrentArrayId > 0){
      this.fillInCurrentArrayId -= 1
      this.currentFillInQuest = this.fillInQuestions[this.fillInCurrentArrayId]
    }
  }

  showFillNext(){
    if(this.fillInCurrentArrayId < this.fillInQuestions.length -1){
      this.fillInCurrentArrayId += 1
      this.currentFillInQuest = this.fillInQuestions[this.fillInCurrentArrayId]
    }
  }

  showFillInSolution(){
    this.fillInSolution = !this.fillInSolution;
  }
test(){
  console.log(this.fillInListe)
}

}
