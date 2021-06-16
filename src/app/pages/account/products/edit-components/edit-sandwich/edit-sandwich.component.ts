import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-sandwich',
  templateUrl: './edit-sandwich.component.html',
  styleUrls: ['./edit-sandwich.component.scss']
})
export class EditSandwichComponent implements OnInit {

  sandwichUpdateForm: FormGroup;
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

    this.sandwichUpdateForm = new FormGroup({
      nom: new FormControl(this.data.nom),
      prixPrincipale: new FormControl(this.data.prixPrincipale),
      compositions: new FormControl(this.data.compositions),
    })

  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  ////////////////////// update Sandwich /////////////////////

  updateSandwich(){

    const newFormData = new FormData();
    // newFormData.set('nom',this.tacosUpdateForm.get('nom').value);

    // form data : boucle for pour les keys : nom , prixPrincipale , compositions
    Object.keys(this.sandwichUpdateForm.value).forEach(key=>{
      newFormData.set(key,this.sandwichUpdateForm.get(key).value);
    });

    // ajout image after update , this.files[0] : nsobou a partier de l'indice 0 :
    // keeen image mouch mawjouda izid , ken mawjouda ikhaliha nafsha fel edit
    if(this.files[0] !== undefined)
    {
      newFormData.append('imageSandwich', this.files[0]);
    }
    // on ferme le dialog apres l'update :
    this.dialogRef.close(newFormData);

    }


}
