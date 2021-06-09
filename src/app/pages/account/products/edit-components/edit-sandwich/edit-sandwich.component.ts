import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-sandwich',
  templateUrl: './edit-sandwich.component.html',
  styleUrls: ['./edit-sandwich.component.scss']
})
export class EditSandwichComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditSandwichComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


}
