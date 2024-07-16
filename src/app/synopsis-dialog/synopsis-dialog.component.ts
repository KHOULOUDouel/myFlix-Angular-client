import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis-dialog',
  template: `
    <h1 mat-dialog-title>Synopsis</h1>
    <div mat-dialog-content>
      <p>{{ data.description }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [`
    h1 {
      margin: 0;
      font-size: 24px;
    }
    div {
      font-size: 16px;
    }
  `]
})
export class SynopsisDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { description: string }) {}
}
