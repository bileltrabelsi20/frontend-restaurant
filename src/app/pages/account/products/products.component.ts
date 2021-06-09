import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  constructor(public product: ProductsService, public dialog: MatDialog) { }

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
  openSandwichEditDialog(product) {
    const dialogRef = this.dialog.open(EditSandwichComponent, {
      width: '250px',
      data : product
    });
  }
  openBurgerEditDialog(product) {
    const dialogRef = this.dialog.open(EditBurgerComponent, {
      width: '100%',
      data : product
    });
  } openTacosEditDialog(product) {
    const dialogRef = this.dialog.open(EditTacosComponent, {
      width: '250px',
      data : product
    });
  }
  openIngrediantEditDialog(product) {
    const dialogRef = this.dialog.open(EditIngrediantComponent, {
      width: '250px',
      data : product
    });
  }

}
