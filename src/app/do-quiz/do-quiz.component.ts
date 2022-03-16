import { Component, OnInit } from '@angular/core';
import { Quest } from '../modules/quest';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-do-quiz',
  templateUrl: './do-quiz.component.html',
  styleUrls: ['./do-quiz.component.css']
})
export class DoQuizComponent implements OnInit {
  questionsService: any;
  ngOnInit(){

  }
  constructor(questionsService: QuizServiceService){
    questionsService.getQuestionObs().subscribe((q: Array<Quest>) =>{
      this.questions = q;
    });
    questionsService.getNextQuestion().subscribe((nQ: number)=>{
      this.i = nQ;
    });
  }

  questions: Array<Quest> = [];
  answer = "";
  i = 0;

  check($event: any){
    console.log(this.questions);
    if(this.i<=this.questions.length){
      if(this.answer.toLowerCase() == this.questions[this.i].answer.toLowerCase()){
        this.i++;
        this.answer="";
      }
      else{
        this.answer="";
      }
    }
  }
  
}
