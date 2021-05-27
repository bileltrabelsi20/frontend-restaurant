import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { AddressesComponent } from './addresses/addresses.component';
import { OrdersComponent } from './orders/orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsComponent } from './products/products.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

export const routes = [
  { 
      path: '', 
      component: AccountComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent, data: {  breadcrumb: 'Dashboard' } },
          { path: 'information', component: InformationComponent, data: {  breadcrumb: 'Information' } },
          { path: 'addresses', component: AddressesComponent, data: {  breadcrumb: 'Addresses' } },
          { path: 'orders', component: OrdersComponent, data: {  breadcrumb: 'Orders' } },
          {path: 'addProduct' , component:AddProductComponent},
          {path:'products' , component:ProductsComponent}

      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatBadgeModule,
    MatDialogModule,
    NgxDropzoneModule
   
  ],
  declarations: [
    AccountComponent,
    DashboardComponent,
    InformationComponent,
    AddressesComponent,
    OrdersComponent,
    AddProductComponent,
    ProductsComponent
  ]
})
export class AccountModule { }
