import { Component, OnInit } from '@angular/core';
import { Quest } from '../modules/quest';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  question="";
  answer="";
  constructor(private questionService: QuizServiceService) { }
//comment
  ngOnInit(): void {
  }
  add(){
    const newQuestion: Quest = {question: this.question, answer: this.answer};
    this.questionService.add(newQuestion);
    this.question="";
    this.answer="";
  }
}
