import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/questions.model';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  questions: Question[] = [];
  constructor(private questionsService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionsService.getAllQuestions();
  }

}
