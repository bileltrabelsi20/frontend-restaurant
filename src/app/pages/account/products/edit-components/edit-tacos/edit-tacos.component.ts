import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-tacos',
  templateUrl: './edit-tacos.component.html',
  styleUrls: ['./edit-tacos.component.scss']
})
export class EditTacosComponent implements OnInit {

  files: File[] = [];
  tacosUpdateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditTacosComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any ,
             public tacosupdate :ProductsService){}


 /////////////////////// add image /////////////////////////

    onSelect(event) {
      this.files.push(...event.addedFiles);    
    }
    onRemove(event) {
      this.files.splice(this.files.indexOf(event), 1);
    }
/////////////////////////////////////////////////////////////

  ngOnInit(): void {

    this.tacosUpdateForm = new FormGroup({
      nom : new FormControl(this.data.nom),
      prixPrincipale : new FormControl(this.data.prixPrincipale),
      compositions : new FormControl(this.data.compositions),
    })
  }

  //////////////// boutton no thank's //////////////////////////

  onNoClick(): void {
    this.dialogRef.close();
  }

  //////////////////////////////////////////////////////////////
  updateTacos(){

    const newFormData = new FormData();
    // newFormData.set('nom',this.tacosUpdateForm.get('nom').value);

    // form data : boucle for pour les keys : nom , prixPrincipale , compositions
    Object.keys(this.tacosUpdateForm.value).forEach(key=>{
      newFormData.set(key,this.tacosUpdateForm.get(key).value);
    });

    // ajout image after update , this.files[0] : nsobou a partier de l'indice 0 :
    newFormData.append('imageTacos', this.files[0]);
    // on ferme le dialog apres l'update :
    this.dialogRef.close(newFormData);

    }

}