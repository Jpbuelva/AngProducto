import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../models/product-dto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { GLOBAL } from '../../service/global';
 

@Component({
  selector: 'app-prodcuct-edit',
  templateUrl: '../../components/prodcuct-add/prodcuct-add.component.html',
  styleUrls: ['./prodcuct-edit.component.css']
})
export class ProdcuctEditComponent implements OnInit {
public title;
public producto: ProductDTO;
public is_edit;
public filesToUpload;
public resultUpload;

  constructor(private route: ActivatedRoute, 
    private productService:ProductsService,
    private router: Router) { 
    this.producto= new ProductDTO(1,'','',1,'');
    this.is_edit =true;
  }

  ngOnInit() {
    this.title= 'Editar Producto';
    this.getproduct();
  }

  getproduct(){
    this.route.params.forEach((params: Params)=>{
      let id= params['id'];
      this.productService.getProduct(id).subscribe(
        Response=>{
          if(Response.code==200){
           this.producto=  Response.data;
          }else{
            this.router.navigate(['Products']);
          }
          
        }, error => {
            console.log(<any>error);
        });
     
    });
   }
   onSubmit(){
    if(this.filesToUpload && this.filesToUpload.length >=1 ){
        this.productService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result)=>{
        this.resultUpload= result;
        this.producto.imagen= this.resultUpload.filename;  
        this.updateProducto();
        
    },(error)=>{
      console.log(error);
      
    });

    }else{
      this.updateProducto();

    }    

  }
  updateProducto(){
    this.route.params.forEach((params: Params)=>{
      let id= params['id'];
    this.productService.editProduct(id,this.producto).subscribe( res => {
      if(res.code==200){
        this.router.navigate(['detail-Products',id]);
      }else{
        console.log(res);
      }

    },
    error => {
      console.log(<any>error);

    });
  });

  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload= <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);


  }
}
