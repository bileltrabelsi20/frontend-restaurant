import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/products.service';
import { EditBurgerComponent } from './edit-components/edit-burger/edit-burger.component';
import { EditIngrediantComponent } from './edit-components/edit-ingrediant/edit-ingrediant.component';
import { EditSandwichComponent } from './edit-components/edit-sandwich/edit-sandwich.component';
import { EditTacosComponent } from './edit-components/edit-tacos/edit-tacos.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public allSandwich = [] as any;
  public allBurger = [] as any;
  public allTacos = [] as any;
  public allIngrediants = [] as any;

  ///////////////////////////////////////////////

  constructor(public product: ProductsService, public dialog: MatDialog ,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadSandwitch();
    this.loadBurger();
    this.loadTacos();
    this.loadIngrediants();
  }
  /////////////////////// list product /////////////////////
  loadSandwitch() {
    this.product.getAllSandwich().subscribe(data => {
      this.allSandwich = data;
    })
  }
  loadBurger(){
    this.product.getAllBurger().subscribe(data => {
      this.allBurger = data;
    })
  }
  loadTacos(){
    this.product.getAllTacos().subscribe(data => {
      this.allTacos = data;
    })
  }
  loadIngrediants(){
    this.product.getAllIngrediants().subscribe(data => {
      this.allIngrediants = data;
    })
  }
  //////////////////// delete product  //////////////////////

  deleteSandwich(id) {
    this.product.deleteSandwich(id).subscribe(data => {
      this.loadSandwitch();
    })
  }

  deleteBurger(id) {
    this.product.deleteBurger(id).subscribe(data => {
      this.loadBurger();
    })
  }
  deleteTacos(id) {
    this.product.deleteTacos(id).subscribe(data => {
      this.loadTacos();
    })
  }
  deleteIngrediant(id) {
    this.product.deleteIngrediant(id).subscribe(data => {
      this.loadIngrediants();
    })
  }

  ///////////////////////// edit products //////////////////////
  
  openSandwichEditDialog(product) {
    const dialogRef = this.dialog.open(EditSandwichComponent, {
      width: '300px',
      height : '550',
      data : product
    });
    dialogRef.afterClosed().subscribe(result => {
     if(result)
     {
      this.product.editSandwich(product._id,result).subscribe(res =>{
        this.loadSandwitch();
        this.snackBar.open('Sadwich updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
      });
     }
    });
  }

  openBurgerEditDialog(product) {
   
    const dialogRef = this.dialog.open(EditBurgerComponent, {
      data : product,
      width: '300px',
      height : '550',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.product.editBurger(product._id,result).subscribe(res =>{
          this.loadBurger();
          this.snackBar.open('Burger updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })        
        });
      }
     
    });
  }
  
  openTacosEditDialog(product) {
    const dialogRef = this.dialog.open(EditTacosComponent, {
      width: '300px',
      height : '550',
      data : product
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.product.editTacos(product._id,result).subscribe(res =>{
          this.loadTacos();
          this.snackBar.open('Tacos updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
        });
      }
      
    });
  }

  openIngrediantEditDialog(product) {
    const dialogRef = this.dialog.open(EditIngrediantComponent, {
      width: '300px',
      height : '550',
      data : product
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.product.editIngrediant(product._id,result).subscribe(res =>{
          this.loadIngrediants();
          this.snackBar.open('Ingrediant updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })
        });
      }
    });
  }
}
