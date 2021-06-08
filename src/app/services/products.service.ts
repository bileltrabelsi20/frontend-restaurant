import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL= environment.baseURL

  constructor(  public http : HttpClient) { }

  addSandwich(data){
    return this.http.post( this.baseURL + '/menu/sandwich',data)
  }

  addBurger(data){
    return this.http.post( this.baseURL + '/menu/burger',data)
  }

  addTacos(data){
    return this.http.post( this.baseURL + '/menu/tacos',data)
  }

  addIngrediant(data){
    return this.http.post( this.baseURL + '/menu/ingrediant',data)
  }

  addImage(data){
    return this.http.post( this.baseURL + '/upload/uploadSingle',data)
  }

  //////////////////// get all products ////////////////////////

  getAllSandwich(){
    return this.http.get( this.baseURL + '/menu/findAllSandwichs')
  }

  getAllBurger(){
    return this.http.get( this.baseURL + '/menu/findAllBurgers')
  }

  getAllTacos(){
    return this.http.get( this.baseURL + '/menu/findAllTacos')
  }

  getAllIngrediants(){
    return this.http.get( this.baseURL + '/menu/findAllIngrediants')
  }

  ////////////////// delete products ///////////////////////////

  deleteSandwich(id){
    return this.http.delete ( this.baseURL + '/menu/deleteSandwich/' + id)
  }
  deleteBurger(id){
    return this.http.delete ( this.baseURL + '/menu/deleteBurger/' + id)
  }
  deleteTacos(id){
    return this.http.delete ( this.baseURL + '/menu/deleteTacos/' + id)
  }
  deleteIngrediant(id){
    return this.http.delete ( this.baseURL + '/menu/deleteIngrediant/' + id)
  }
  
}
