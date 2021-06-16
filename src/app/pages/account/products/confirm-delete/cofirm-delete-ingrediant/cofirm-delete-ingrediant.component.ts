import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cofirm-delete-ingrediant',
  templateUrl: './cofirm-delete-ingrediant.component.html',
  styleUrls: ['./cofirm-delete-ingrediant.component.scss']
})
export class CofirmDeleteIngrediantComponent implements OnInit {
  message : string;

  constructor(private dialogRef: MatDialogRef<CofirmDeleteIngrediantComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data  : any) 
    { 
      this.message = `Are you sure you want to delete this ${data.ressource}?`
    }

  ngOnInit(): void {
  }
  deleteIngrediant() {
    this.dialogRef.close(true);
  }

  closeAfterConfirm() {
    this.dialogRef.close(false);
  }

}
