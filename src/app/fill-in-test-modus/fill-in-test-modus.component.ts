import { Component, OnInit } from '@angular/core';
import { AllFillInQuestions } from '../shared/all-fill-in-questions';
import { FiServiceService } from '../shared/fi-service.service';

@Component({
  selector: 'app-fill-in-test-modus',
  templateUrl: './fill-in-test-modus.component.html',
  styleUrls: ['./fill-in-test-modus.component.css']
})

export class FillInTestModusComponent implements OnInit {
  fiQuestions: AllFillInQuestions[]
  questionId: number = 1
  questionLives = 7
  questionSavedSkip = 0
  fiAnswer: string
  questionPosNr: number
  auswertung: boolean = false;
  rightFi: number = 0
  wrongFi: number = 0
  skippedFi: number = 0
  hidden: boolean = true;
  
  fillIn: AllFillInQuestions
  arrayId: number = 0;
  
  constructor(private fiQuestion: FiServiceService) { }

  ngOnInit(): void {
    this.auswertung = false
    this.fiQuestions = this.fiQuestion.getAllFiQuest();
    // das Attribute answer definieren 
    this.fiQuestions.map(q => q.answer = '')

    // erste Frage setzen
    this.arrayId = 0
    this.fillIn = this.fiQuestions[this.arrayId]
  }

  nextQuestion() {
    if (this.arrayId < this.fiQuestions.length - 1)
      this.arrayId++
    this.fillIn = this.fiQuestions[this.arrayId]
  }

  prevQuestion() {
    if (this.arrayId > 0)
      this.arrayId--
    this.fillIn = this.fiQuestions[this.arrayId]
  }

}
