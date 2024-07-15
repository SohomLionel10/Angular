import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  private apiurl = 'https://api.restful-api.dev'
  constructor(private http:HttpClient){}

  getobject(){
    return this.http.get<ProductResponse>(this.apiurl + '/objects')
  }

  getsingleobject(id:number){
    return this.http.get<GetProductById>(this.apiurl + '/objects' + id)
  }

}
