import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cofirm-delete-tacos',
  templateUrl: './cofirm-delete-tacos.component.html',
  styleUrls: ['./cofirm-delete-tacos.component.scss']
})
export class CofirmDeleteTacosComponent implements OnInit {
  message : string;

  constructor( private dialogRef: MatDialogRef<CofirmDeleteTacosComponent>,
              @Inject(MAT_DIALOG_DATA) 
              private data  : any) 

  { 
     this.message = `Are you sure you want to delete this ${data.ressource}?`
  }

  ngOnInit(): void {}

  //////////////////// delete burger after confirm ///////////////////
  
  deleteTacos() {
    this.dialogRef.close(true);
  }

  closeAfterConfirm() {
    this.dialogRef.close(false);
  }

}
