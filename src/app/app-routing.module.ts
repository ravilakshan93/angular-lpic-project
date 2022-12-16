import { Component, NgModule, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'; 
import { LernModusLpicComponent } from './lern-modus-lpic/lern-modus-lpic.component';
import { TestModusLpicComponent } from './test-modus-lpic/test-modus-lpic.component';
import { PruefModusLpicComponent } from './pruef-modus-lpic/pruef-modus-lpic.component';

import { StartTestModusComponent } from './start-test-modus/start-test-modus.component';
import { MultipleChoiceQuestionsComponent } from './multiple-choice-questions/multiple-choice-questions.component';

import { MultiChoiceTestModusComponent } from './multi-choice-test-modus/multi-choice-test-modus.component';
import { SingleChoiceTestModusComponent } from './single-choice-test-modus/single-choice-test-modus.component';
import { FillInTestModusComponent } from './fill-in-test-modus/fill-in-test-modus.component';
import { StartPruefModusComponent } from './start-pruef-modus/start-pruef-modus.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'lernModusLpic',
    component: LernModusLpicComponent
  },
  {
    path: 'lernmodusmc',
    component:  MultipleChoiceQuestionsComponent
  },
  {
    path: 'testModusLpic',
    component: TestModusLpicComponent
  },
  {
    path: 'pruefModusLpicComponent',
    component: PruefModusLpicComponent
  },
  {
    path: 'startTestModus',
    component: StartTestModusComponent 
  },
  {
    path: 'multiChoiceTestModus',
    component: MultiChoiceTestModusComponent
  },
  {
    path: 'singleChoiceTestModus',
    component: SingleChoiceTestModusComponent
  },
  {
    path: 'fillInTestModus',
    component: FillInTestModusComponent
  },
  {
    path: 'startPruefModus',
    component: StartPruefModusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



