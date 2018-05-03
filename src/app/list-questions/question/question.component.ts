import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/questions.model';
import { MatDialog } from '@angular/material/dialog';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;
  constructor(private dialog: MatDialog) { }

  helpClick(): void {
    let dialogRef = this.dialog.open(AnswerComponent, {
      width: '250px',
      data: this.question
    });
  }

  ngOnInit() {
  }

}
