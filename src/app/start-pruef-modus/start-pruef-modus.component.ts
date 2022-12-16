import { Component, OnInit } from '@angular/core';
import { McServiceService } from '../shared/mc-service.service';
import { AllMcquestion } from '../shared/all-mcquestions';

import { ScServiceService } from '../shared/sc-service.service';
import { AllScQuestions } from '../shared/all-sc-questions';

import { FiServiceService } from '../shared/fi-service.service';
import { AllFillInQuestions } from '../shared/all-fill-in-questions';

@Component({
  selector: 'app-start-pruef-modus',
  templateUrl: './start-pruef-modus.component.html',
  styleUrls: ['./start-pruef-modus.component.css']
})
export class StartPruefModusComponent implements OnInit {

  mcquestions: AllMcquestion[]
  scquestions : AllScQuestions[]
  fiquestions: AllFillInQuestions[]

  allQuestions : any = [];
  questionsAll : any[] = [];

  currentQuestion : any
  questionId : number = 0;


  questionAllnewId : any [] = []; 




  constructor(private mQuest : McServiceService, 
              private scQuest : ScServiceService, 
              private fiQuest : FiServiceService) { }

  ngOnInit(): void {
    this.fiquestions = this.fiQuest.getAllFiQuest()
    this.mcquestions = this.mQuest.getAllMcQuest()
    this.scquestions = this.scQuest.getAllScQuest()


    this.questionsAll = this.allQuestions.concat(this.fiquestions, this.mcquestions, this.scquestions)
    this.questionAllnewId = this.questionsAll.map((item,index) => ({...item, newid: 1}))

    this.questionId = 1;
    this.currentQuestion = this.questionAllnewId[this.questionId]
    console.log(this.allQuestions)

    

  }


  nextQuestion(id : number){
    if(id < this.currentQuestion.length - 1) {
      this.currentQuestion.newid++
      this.currentQuestion = this.questionAllnewId[this.questionId]

    }
  }


  prevQuestion(){

  }

}

