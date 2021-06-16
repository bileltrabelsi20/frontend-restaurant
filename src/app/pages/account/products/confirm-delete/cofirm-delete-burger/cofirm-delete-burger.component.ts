import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cofirm-delete-burger',
  templateUrl: './cofirm-delete-burger.component.html',
  styleUrls: ['./cofirm-delete-burger.component.scss']
})
export class CofirmDeleteBurgerComponent implements OnInit {

  message : string;


  constructor (private dialogRef: MatDialogRef<CofirmDeleteBurgerComponent>,
               @Inject(MAT_DIALOG_DATA) 
               private data  : any)

   { 
     this.message = `Are you sure you want to delete this ${data.ressource}?`
   }

  ngOnInit(): void {}

//////////////////// delete burger after confirm ///////////////////
  
  deleteBurger() {
    this.dialogRef.close(true);
  }

  closeAfterConfirm() {
    this.dialogRef.close(false);
  }

}
