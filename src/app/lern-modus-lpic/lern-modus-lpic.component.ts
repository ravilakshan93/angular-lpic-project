import { Component, OnInit } from '@angular/core';
import { FillInQuestionsComponent } from '../fill-in-questions/fill-in-questions.component';
import { MultipleChoiceQuestionsComponent } from '../multiple-choice-questions/multiple-choice-questions.component';
import { SingleChoiceQuestionsComponent } from '../single-choice-questions/single-choice-questions.component';

type ViewState = "mc" | "sc" | "fi" | "all" | ""

@Component({
  selector: 'app-lern-modus-lpic',
  templateUrl: './lern-modus-lpic.component.html',
  styleUrls: ['./lern-modus-lpic.component.css'],

})
export class LernModusLpicComponent implements OnInit {
    //modus: string = MultipleChoiceQuestionsComponent/SingleChoiceQuestionsComponent/FillInQuestionsComponent/

    viewState: ViewState = '';
  ngOnInit() {
    
  }
  
  constructor() { }

  switch(eingabe :ViewState){
    if(this.viewState == eingabe){
      this.viewState = "";
    }else{
      this.viewState = eingabe;
    }
    
  }
}


