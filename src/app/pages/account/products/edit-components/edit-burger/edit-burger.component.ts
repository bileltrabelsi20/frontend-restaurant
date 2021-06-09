import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-burger',
  templateUrl: './edit-burger.component.html',
  styleUrls: ['./edit-burger.component.scss']
})
export class EditBurgerComponent implements OnInit {
  burgerForm : FormGroup;

  constructor(public dialogRef: MatDialogRef<EditBurgerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.burgerForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prixPrincipale: new FormControl('', Validators.required),
      compositions: new FormControl('', Validators.required),
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


}
