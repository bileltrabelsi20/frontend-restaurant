import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-burger',
  templateUrl: './edit-burger.component.html',
  styleUrls: ['./edit-burger.component.scss']
})
export class EditBurgerComponent implements OnInit {
  burgerUpdateForm : FormGroup;
  files: File[] = [];

  constructor(public dialogRef: MatDialogRef<EditBurgerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    /////////////////////// add image /////////////////////////

    onSelect(event) {
      this.files.push(...event.addedFiles);    
    }
    onRemove(event) {
      this.files.splice(this.files.indexOf(event), 1);
    }

    ///////////////////////////////////////////////////////////

  ngOnInit(): void {
    this.burgerUpdateForm = new FormGroup({
      nom: new FormControl(this.data.nom),
      prixPrincipale: new FormControl(this.data.prixPrincipale),
      compositions: new FormControl(this.data.compositions),
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateBurger(){

    const newFormData = new FormData();
    // newFormData.set('nom',this.tacosUpdateForm.get('nom').value);

    // form data : boucle for pour les keys : nom , prixPrincipale , compositions
    Object.keys(this.burgerUpdateForm.value).forEach(key=>{
      newFormData.set(key,this.burgerUpdateForm.get(key).value);
    });

    // ajout image after update , this.files[0] : nsobou a partier de l'indice 0 :
    newFormData.append('imageBurger', this.files[0]);
    // on ferme le dialog apres l'update :
    this.dialogRef.close(newFormData);

    }


}
