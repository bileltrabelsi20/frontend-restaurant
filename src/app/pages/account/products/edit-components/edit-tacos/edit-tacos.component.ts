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
  tacosForm: FormGroup;
  tacosId : any

  constructor(public dialogRef: MatDialogRef<EditTacosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any )
     {  this.tacosId = data._id }

    onSelect(event) {
      this.files.push(...event.addedFiles);    
    }
    onRemove(event) {
      this.files.splice(this.files.indexOf(event), 1);
    }

    tacosUpdateForm = new FormGroup({
      nom : new FormControl(this.data.nom),
      prixPrincipale : new FormControl(this.data.prixPrincipale),
      compositions : new FormControl(),

    })

  ngOnInit(): void {

    this.tacosForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prixPrincipale: new FormControl('', Validators.required),
      compositions: new FormControl('', Validators.required),
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateTacos(){

    const newFormData = new FormData();

    newFormData.set('nom',this.tacosUpdateForm.get('nom').value);
    newFormData.set('prixPrincipale',this.tacosUpdateForm.get('prixPrincipale').value);
    newFormData.set('compositions',this.tacosUpdateForm.get('compositions').value);

    this.dialogRef.close(newFormData);

    }

}
