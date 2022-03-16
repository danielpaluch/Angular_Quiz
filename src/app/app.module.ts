import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizServiceService } from './services/quiz-service.service';
import { WinnerComponent } from './winner/winner.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { DoQuizComponent } from './do-quiz/do-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    WinnerComponent,
    AddQuizComponent,
    DoQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'add-quiz', component: AddQuizComponent},
      {path: 'do-quiz', component: DoQuizComponent},
      //{path: '**', component: AddQuizComponent}
    ]) 
  ],
  providers: [QuizServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
