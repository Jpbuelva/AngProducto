import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProdcuctAddComponent } from './components/prodcuct-add/prodcuct-add.component'; 
import { ProdcuctDetailComponent } from './components/prodcuct-detail/prodcuct-detail.component';
import { ProdcuctEditComponent } from './components/prodcuct-edit/prodcuct-edit.component';


const routes: Routes = [
   {path : 'home', component: HomeComponent} ,
   {path : 'Products', component: ProductListComponent} ,
   {path : 'create-Products', component: ProdcuctAddComponent} ,
   {path : 'detail-Products/:id', component: ProdcuctDetailComponent} ,
   {path : 'edit-Products/:id', component: ProdcuctEditComponent} ,
   {path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
