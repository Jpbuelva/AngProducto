import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ProductDTO } from '../../models/product-dto';
import { error } from 'protractor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Listado de productos';
  public productos: ProductDTO[];

  constructor(public productsService: ProductsService) { 


  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productsService.getProducts().subscribe(
      res => {    
          if(res.code !=200){
            console.log('Error');
          }else
          {
           this.productos= res.data;           
          }
      } ,
      error => {
        console.log(<any>console.error());      

      });
  
  }
  onDeleteProduct(id){
    if(confirm('Está seguro que desea eliminar ? ')){
    this.productsService.deleteProduct(id).subscribe(Response=>{
      if(Response.code==200){
          this.getProducts();
        
      }{
        alert('Error al borrar');
      }
     
    },
    error=>{
      console.log(<any>error);
    });
  }else{
    console.log('No eliminada');
  }
}
  

}
