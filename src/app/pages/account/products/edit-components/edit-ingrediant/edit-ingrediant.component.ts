import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-ingrediant',
  templateUrl: './edit-ingrediant.component.html',
  styleUrls: ['./edit-ingrediant.component.scss']
})
export class EditIngrediantComponent implements OnInit {
  
  ingrediantUpdateForm: FormGroup;
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

    this.ingrediantUpdateForm = new FormGroup({
      nomIngrediant: new FormControl(this.data.nomIngrediant),
      prixIngrediant: new FormControl(this.data.prixIngrediant),
    })

  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateBurger(){

    const newFormData = new FormData();
    // newFormData.set('nom',this.tacosUpdateForm.get('nom').value);

    // form data : boucle for pour les keys : nom , prixPrincipale , compositions
    Object.keys(this.ingrediantUpdateForm.value).forEach(key=>{
      newFormData.set(key,this.ingrediantUpdateForm.get(key).value);
    });

    // ajout image after update , this.files[0] : nsobou a partier de l'indice 0 :
    newFormData.append('imageIngrediant', this.files[0]);
    // on ferme le dialog apres l'update :
    this.dialogRef.close(newFormData);

    }


}
