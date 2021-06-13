import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-sandwich',
  templateUrl: './edit-sandwich.component.html',
  styleUrls: ['./edit-sandwich.component.scss']
})
export class EditSandwichComponent implements OnInit {

  sandwichForm: FormGroup;
  files: File[] = [];


  constructor(public dialogRef: MatDialogRef<EditSandwichComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onSelect(event) {
      this.files.push(...event.addedFiles);    
    }
  
    onRemove(event) {
      this.files.splice(this.files.indexOf(event), 1);
    }

  ngOnInit(): void {

    this.sandwichForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prixPrincipale: new FormControl('', Validators.required),
      compositions: new FormControl('', Validators.required),
    })

  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


}
