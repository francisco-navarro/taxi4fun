import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'y4f-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent { 
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(ToolbarFeedbackDialog);
  }
}

@Component({
  selector: 'toolbar-feedback-dialog',
  template: `
  <h2 md-dialog-title>Leave us a feedback</h2>
  <md-dialog-content>Are you disgusted and ANGRY to be human in today's world ?</md-dialog-content>
  <md-dialog-actions>
    <button md-button md-dialog-close>No</button>
    <!-- Can optionally provide a result for the closing dialog. -->
    <button md-button [md-dialog-close]="true">Yes</button>
  </md-dialog-actions>
`
})
export class ToolbarFeedbackDialog {}