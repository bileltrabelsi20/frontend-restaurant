import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  burgerForm: FormGroup;
  sandwichForm: FormGroup;
  tacosForm: FormGroup;
  ingrediantsForm: FormGroup;
  files: File[] = [];

  constructor(public snackBar: MatSnackBar, public router: Router, private productService: ProductsService) { }


  onSelect(event) {
    this.files.push(...event.addedFiles);    
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnInit() {  

    this.burgerForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prixPrincipale: new FormControl('', Validators.required),
      compositions: new FormControl('', Validators.required),
    })

    this.sandwichForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prixPrincipale: new FormControl('', Validators.required),
      compositions: new FormControl('', Validators.required),
    })

    this.tacosForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prixPrincipale: new FormControl('', Validators.required),
      compositions: new FormControl('', Validators.required),
    })

    this.ingrediantsForm = new FormGroup({
      nomIngrediant: new FormControl('', Validators.required),
      prixIngrediant: new FormControl('', Validators.required),
    })
  }

  //////////////////////////////////////////////////////////////////

  // form data heya el form eli bech nhotou fiha les input mte3na

  addTacos() {
    
    if (this.tacosForm.valid) {     
      const formdata = new FormData();
      Object.keys(this.tacosForm.value).forEach(key => {
        formdata.append(key , this.tacosForm.value[key])
      });
      formdata.append('imageTacos', this.files[0]);

      this.productService.addTacos(formdata).subscribe((res) => {
          // remove files
          this.files = [];
        this.snackBar.open('tacos ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
        this.tacosForm.reset()
      })
    }
    else {
      this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  addBurger() {

    if (this.burgerForm.valid) {
      const formdata = new FormData();

      Object.keys(this.burgerForm.value).forEach(key => {
        formdata.append(key , this.burgerForm.value[key])
      });
      formdata.append('imageBurger', this.files[0]);

      this.productService.addBurger(formdata).subscribe((res) => {
          // remove files
          this.files = [];
      this.snackBar.open('burger ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
      this.burgerForm.reset()
      })
    }
    else {
      this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
    }
  }

  ////////////////////////////////////////////////////////////////////////

  addSandwich() {

    if (this.sandwichForm.valid) {
      const formdata = new FormData();

      Object.keys(this.sandwichForm.value).forEach(key => {
        formdata.append(key , this.sandwichForm.value[key])
      });
      formdata.append('imageSandwich', this.files[0]);

      this.productService.addSandwich(formdata).subscribe((res) => {
        // remove files
        this.files = [];
      this.snackBar.open('sandwich ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
      this.sandwichForm.reset()
      })
    }
    else {
      this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
    }
  }

  ///////////////////////////////////////////////////////////////

  addIngrediant() {

    if (this.ingrediantsForm.valid) {
      const formdata = new FormData();

      Object.keys(this.ingrediantsForm.value).forEach(key => {
        formdata.append(key , this.ingrediantsForm.value[key])
      });
      formdata.append('imageIngrediant', this.files[0]);

      this.productService.addIngrediant(formdata).subscribe((res) => {
          // remove files
          this.files = [];
      this.snackBar.open('ingrediant ajouter!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
      })
    }
    else {
      this.snackBar.open('remplir le formulaire', '×', { panelClass: 'close', verticalPosition: 'top', duration: 3000 })
    }
    this.ingrediantsForm.reset()
  


  }

}
