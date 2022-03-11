import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Quest } from '../modules/quest';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {


  private questionObs = new BehaviorSubject<Array<Quest>>([]);
  private sumQuest = 0;
  private i = new Subject<number>();

  constructor() { 
    const questions: Array<Quest> = [
      {question: "Ile to 2+2?", answer: "4"},
      {question: "Jaki kolor mają chmury?", answer: "biały"},
      {question: "Czy krowa pije mleko?", answer: "nie"}
    ]
    this.questionObs.next(questions);
  }

  nextQuestion(){
    this.sumQuest++;
    this.i.next(this.sumQuest);
  }
  reset(){
    this.sumQuest=0;
    this.i.next(this.sumQuest);
  }
  add(question: Quest){
    const list = this.questionObs.getValue();
    list.push(question);
    this.questionObs.next(list);
  }
  getNextQuestion(): Observable<number>{
    return this.i.asObservable();
  }
  getQuestionObs(): Observable<Array<Quest>>{
    return this.questionObs.asObservable();
  }
}
