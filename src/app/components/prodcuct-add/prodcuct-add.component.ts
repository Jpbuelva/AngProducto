import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../models/product-dto';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';
import { GLOBAL } from '../../service/global';

@Component({
  selector: 'app-prodcuct-add',
  templateUrl: './prodcuct-add.component.html',
  styleUrls: ['./prodcuct-add.component.css']
})
export class ProdcuctAddComponent implements OnInit {
  public filesToUpload;
  public resultUpload;
  title= 'Crear un nuevo producto';
  public producto: ProductDTO;
  constructor(public productsService: ProductsService, private route: Router) {
    this.producto = new ProductDTO(0,'','',0,'');
   }

  ngOnInit() { 
  }

  

  onSubmit(){
    debugger;
    if(this.filesToUpload && this.filesToUpload.length >=1 ){
      debugger;
      this.productsService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result)=>{
        this.resultUpload= result;
        this.producto.imagen= this.resultUpload.filename;  
        this.saveProducto();
        
    },(error)=>{
      console.log(error);
      
    });

    }else{
      this.saveProducto();

    }    

  }
  saveProducto(){
    this.productsService.addProduct(this.producto).subscribe( res => {
      if(res.code==200){
        this.route.navigate(['Products']);
      }else{
        console.log(res);
      }

    },
    error => {

    });

  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload= <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);


  }
}
