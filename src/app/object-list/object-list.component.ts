import { Component } from '@angular/core';
import { ObjectService } from '../Services/object.service';
import { Products } from '../Models/model';


@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent {

 products: Products[]=[];

  constructor(private observ:ObjectService){}

  ngOnInit():void{
    this.Objectsget();
  }

  Objectsget():void{
    this.observ.getobject().subscribe(
      (response)=>{
        if(response !==null){
          this.products=response.data;
        }
      },
      (error) =>{
        console.error ('error fetching products:', error)
      }
    )
  }

}
