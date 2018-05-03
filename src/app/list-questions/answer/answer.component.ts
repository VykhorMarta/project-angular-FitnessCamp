import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
   { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
