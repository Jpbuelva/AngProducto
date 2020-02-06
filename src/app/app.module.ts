import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdcuctAddComponent } from './components/prodcuct-add/prodcuct-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdcuctDetailComponent } from './components/prodcuct-detail/prodcuct-detail.component';
import { ProdcuctEditComponent } from './components/prodcuct-edit/prodcuct-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductListComponent,
    ProdcuctAddComponent,
    ProdcuctDetailComponent,
    ProdcuctEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule       

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
