import { Component, OnInit } from '@angular/core';
import { AllMcquestion } from '../shared/all-mcquestions';
//import { Router } from '@angular/router';
import { McServiceService } from '../shared/mc-service.service';


@Component({
  selector: 'app-multiple-choice-questions',
  templateUrl: './multiple-choice-questions.component.html',
  styleUrls: ['./multiple-choice-questions.component.css']
})
export class MultipleChoiceQuestionsComponent implements OnInit {
  mcquestions: AllMcquestion[];
  currentquest: AllMcquestion
  showliste: boolean = false;
  currentArrayId: number = 0
  showInfo : boolean = false;
  mcService : McServiceService= new McServiceService();

  constructor() { }
  ngOnInit(): void {
    this.showliste = true
    this.mcquestions = this.mcService.getAllMcQuest();
    
    this.currentArrayId = 0
    this.currentquest = this.mcquestions[this.currentArrayId]
  }


  //   getAllMcqs():AllMcquestions[]{
  //     return this.mcquestions;
  //   }


//Hier werden die Fragen einzel angezeigt
  togglleListeEinzel() {
    this.showliste = !this.showliste
  }


  //Hier fangen die Fragen vorne an von 1
  firstQuest() 
  {
    this.currentArrayId = 0
    this.currentquest = this.mcquestions[this.currentArrayId]
  }


//Die funktionalität für den User um eine Frage zurück zugehen
  showPrev() {
    if(this.currentArrayId > 0) {
      this.currentArrayId -= 1
      this.currentquest = this.mcquestions[this.currentArrayId]
    }
  }
  
  //Die funktionalität für den User um eine Frage weiter zugehen
  showNext() 
  {
    if(this.currentArrayId < this.mcquestions.length -1) {
      this.currentArrayId += 1
      this.currentquest = this.mcquestions[this.currentArrayId]
    }
  }

  //Lösung Anzeigen 
  toggleShowInfo()
  {
    this.showInfo= !this.showInfo;
  }

}


