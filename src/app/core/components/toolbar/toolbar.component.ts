import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'y4f-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ToolbarFeedbackDialog);
  }
}

@Component({
  selector: 'toolbar-feedback-dialog',
  template: `
  <h2 mat-dialog-title>Leave us a feedback</h2>
  <mat-dialog-content>Are you disgusted and ANGRY to be human in today's world ?</mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close>No</button>
    <button mat-button [mat-dialog-close]="true">Yes</button>
  </mat-dialog-actions>
`
})
export class ToolbarFeedbackDialog {}