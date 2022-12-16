import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LernModusLpicComponent } from './lern-modus-lpic/lern-modus-lpic.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestModusLpicComponent } from './test-modus-lpic/test-modus-lpic.component';
import { PruefModusLpicComponent } from './pruef-modus-lpic/pruef-modus-lpic.component';
import { StartTestModusComponent } from './start-test-modus/start-test-modus.component';
import { SingleChoiceQuestionsComponent } from './single-choice-questions/single-choice-questions.component';
import { MultipleChoiceQuestionsComponent } from './multiple-choice-questions/multiple-choice-questions.component';
import { FillInQuestionsComponent } from './fill-in-questions/fill-in-questions.component';
import { MultiChoiceTestModusComponent } from './multi-choice-test-modus/multi-choice-test-modus.component';
import { SingleChoiceTestModusComponent } from './single-choice-test-modus/single-choice-test-modus.component';
import { FillInTestModusComponent } from './fill-in-test-modus/fill-in-test-modus.component';
import {MatDialogModule} from '@angular/material/dialog'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPruefModusComponent } from './start-pruef-modus/start-pruef-modus.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LernModusLpicComponent,
    HomepageComponent,
    TestModusLpicComponent,
    PruefModusLpicComponent,
    StartTestModusComponent,
    MultipleChoiceQuestionsComponent,
    SingleChoiceQuestionsComponent,
    FillInQuestionsComponent,
    MultiChoiceTestModusComponent,
    SingleChoiceTestModusComponent,
    FillInTestModusComponent,
    StartPruefModusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 

}
