import { Component, OnInit } from '@angular/core';
import{ CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-exampledir',
  templateUrl: './exampledir.component.html',
  styleUrls: ['./exampledir.component.css']
})
export class ExampledirComponent implements OnInit {

  public pro:any;

  constructor(private crud:CrudServiceService) { }

  ngOnInit() {
    this.crud.myfunction("products").subscribe(
      (response)=>{
        console.log(response)
        this.pro=response
      }
    )
  }

}
