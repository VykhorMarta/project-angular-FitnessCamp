import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { DialogSwedenComponent } from '../dialogs/dialog-sweden/dialog-sweden.component';
import { DialogCroatiaComponent } from '../dialogs/dialog-croatia/dialog-croatia.component';
import { DialogSloveniaComponent } from '../dialogs/dialog-slovenia/dialog-slovenia.component';
import { DialogCappadociaComponent } from '../dialogs/dialog-cappadocia/dialog-cappadocia.component';
import { DialogAustriaComponent } from '../dialogs/dialog-austria/dialog-austria.component';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<DialogComponentComponent>;
  fileSweden: MatDialogRef<DialogSwedenComponent>;
  fileCroatia: MatDialogRef<DialogCroatiaComponent>;
  fileSlovenia: MatDialogRef<DialogSloveniaComponent>;
  fileCappadocia: MatDialogRef<DialogCappadociaComponent>;
  fileAustria: MatDialogRef<DialogAustriaComponent>;


  constructor(private dialog: MatDialog) { }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponentComponent);
  }

  openDialogSweden() {
    this.fileSweden = this.dialog.open(DialogSwedenComponent);
  }

  openDialogCroatia(){
    this.fileCroatia = this.dialog.open(DialogCroatiaComponent);
  }

  openDialogSlovenia() {
    this.fileSlovenia = this.dialog.open(DialogSloveniaComponent);
  }

  openDialogCappadocia() {
    this.fileCappadocia = this.dialog.open(DialogCappadociaComponent);
  }

  openDialogAustria(){
    this.fileAustria = this.dialog.open(DialogAustriaComponent);
  }


  ngOnInit() {
  }

}
