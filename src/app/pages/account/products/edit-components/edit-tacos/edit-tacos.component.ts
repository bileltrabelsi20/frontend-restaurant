import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-tacos',
  templateUrl: './edit-tacos.component.html',
  styleUrls: ['./edit-tacos.component.scss']
})
export class EditTacosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTacosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
