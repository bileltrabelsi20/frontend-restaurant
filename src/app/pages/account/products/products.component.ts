import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // baseURL= environment.baseURL
  // products=[]as any
  constructor() { }

  ngOnInit() {
    // this.http.getProducts().subscribe((res: any)=>{this.products=res;
    //   console.log(res);
    //   },
    //   (erreur:any)=>{},
    //    ()=>
    //     {
    //       console.log("finished");
    //       console.log(this.products);
          
  }

}
