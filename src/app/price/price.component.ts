import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { DialogSwedenComponent } from '../dialogs/dialog-sweden/dialog-sweden.component';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<DialogComponentComponent>;

  fileSweden: MatDialogRef<DialogSwedenComponent>;


  constructor(private dialog: MatDialog) { }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponentComponent);
  }

  openDialogSweden() {
    this.fileSweden = this.dialog.open(DialogSwedenComponent);
  }

  openDialogCroatia(){

  }

  openDialogSlovenia() {

  }

  openDialogCappadocia() {

  }

  openDialogAustria(){

  }


  ngOnInit() {
  }

}
