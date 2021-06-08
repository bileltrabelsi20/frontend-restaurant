import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';


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
  public deleteSan = [] as any;
  public deleteBur = [] as any;
  public deleteTac = [] as any;
  public deleteIng = [] as any;



  constructor(public product : ProductsService) { }

  ngOnInit() {

    /////////////////////// add product /////////////////////
  
      this.product.getAllSandwich().subscribe(data => {
        this.allSandwich = data ;
      })
    
      this.product.getAllBurger().subscribe(data => {
        this.allBurger = data ;
      })
    
      this.product.getAllTacos().subscribe(data => {
        this.allTacos = data ;
      })
      this.product.getAllIngrediants().subscribe(data => {
        this.allIngrediants = data ;
      })
    
  }

  //////////////////// delete product  //////////////////////

  deleteSandwich(id){
    this.product.deleteSandwich(id).subscribe(data => {
      this.deleteSan = data ; 
      this.ngOnInit();
  })
 }

 deleteBurger(id){
  this.product.deleteBurger(id).subscribe(data => {
    this.deleteBur = data ; 
    this.ngOnInit();
})
}
deleteTacos(id){
  this.product.deleteTacos(id).subscribe(data => {
    this.deleteBur = data ; 
    this.ngOnInit();
})
}
deleteIngrediant(id){
  this.product.deleteIngrediant(id).subscribe(data => {
    this.deleteBur = data ; 
    this.ngOnInit();
})
}
}
