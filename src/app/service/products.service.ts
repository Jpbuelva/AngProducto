import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { ProductDTO } from '../models/product-dto';
import { Observable } from 'rxjs/internal/Observable';
import { promise } from 'protractor';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public url : string;
public 
  constructor( public http : HttpClient) {
    this.url = GLOBAL.url;
   }

   getProducts(){
     return this.http.get(this.url+'productos');
   }
   getProduct(id){
     return this.http.get(this.url+'producto/'+id);

   }
   
   addProduct(producto: ProductDTO): Observable<any>{
     debugger;
    let json = JSON.stringify(producto);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
     
    return this.http.post(this.url+'productos', params, {headers: headers});
}
editProduct(id, producto: ProductDTO): Observable<any>{
  debugger;
  let json = JSON.stringify(producto);
  let params = "json="+json;
  let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');   
  return this.http.post(this.url+'update-producto/'+id, params, {headers: headers});
}

deleteProduct(id){
  return this.http.get(this.url+'delete-producto/'+id);
}
makeFileRequest(url: string, params: Array<string>, files: Array<File>){
  return new Promise((resolve, reject)=> {
    var formData: any = new FormData();
    var xhr = new XMLHttpRequest();
    for(var i=0; i<files.length; i ++ ){
      formData.append('uploads[]', files[i], files[i].name);
    }
    xhr.onreadystatechange =function(){
      if(xhr.readyState==4){
        if(xhr.status==200){
          resolve(JSON.parse(xhr.response));

        }else{
          reject(xhr.response);
        }
      }
    };
    xhr.open("POST",url,true);
    xhr.send(formData);
  });

}

}
