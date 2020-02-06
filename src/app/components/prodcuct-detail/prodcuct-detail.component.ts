import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../service/products.service';
import { ProductDTO } from 'src/app/models/product-dto';

@Component({
  selector: 'app-prodcuct-detail',
  templateUrl: './prodcuct-detail.component.html',
  styleUrls: ['./prodcuct-detail.component.css']
})
export class ProdcuctDetailComponent implements OnInit {
   public producto: ProductDTO;
  constructor(private route: ActivatedRoute, 
              private productService:ProductsService,
              private router: Router) { }

  ngOnInit() {
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
}
