import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizServiceService } from './services/quiz-service.service';
import { WinnerComponent } from './winner/winner.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    WinnerComponent,
    AddQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuizServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
