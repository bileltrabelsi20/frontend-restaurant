import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-ingrediant',
  templateUrl: './edit-ingrediant.component.html',
  styleUrls: ['./edit-ingrediant.component.scss']
})
export class EditIngrediantComponent implements OnInit {
  
  ingrediantsForm: FormGroup;
  files: File[] = [];

  constructor(public dialogRef: MatDialogRef<EditIngrediantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onSelect(event) {
      this.files.push(...event.addedFiles);    
    }
  
    onRemove(event) {
      this.files.splice(this.files.indexOf(event), 1);
    }

  ngOnInit(): void {

    this.ingrediantsForm = new FormGroup({
      nomIngrediant: new FormControl('', Validators.required),
      prixIngrediant: new FormControl('', Validators.required),
    })

  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


}
