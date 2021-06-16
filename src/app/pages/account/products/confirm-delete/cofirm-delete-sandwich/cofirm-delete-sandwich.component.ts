import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cofirm-delete-sandwich',
  templateUrl: './cofirm-delete-sandwich.component.html',
  styleUrls: ['./cofirm-delete-sandwich.component.scss']
})
export class CofirmDeleteSandwichComponent implements OnInit {
  message : string;


  constructor(private dialogRef: MatDialogRef<CofirmDeleteSandwichComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data  : any) {      this.message = `Are you sure you want to delete this ${data.ressource}?`
  }

  ngOnInit(): void {
  }

  deleteSandwich() {
    this.dialogRef.close(true);
  }

  closeAfterConfirm() {
    this.dialogRef.close(false);
  }

}
