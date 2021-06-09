import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-ingrediant',
  templateUrl: './edit-ingrediant.component.html',
  styleUrls: ['./edit-ingrediant.component.scss']
})
export class EditIngrediantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditIngrediantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


}
