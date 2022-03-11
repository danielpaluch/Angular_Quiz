import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  constructor(private questions: QuizServiceService) { }
  ngOnInit(): void {
  }
  restart(){
    this.questions.reset();
  }
}
