import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examplepipe',
  templateUrl: './examplepipe.component.html',
  styleUrls: ['./examplepipe.component.css']
})
export class ExamplepipeComponent implements OnInit {

  username:String="Ajay kumar";
  today:Number=Date.now();
  amount:Number=32.90;
  marks:Number=0.2039;

  number_sqrt=36;
  price=1000;
  discount=20
  

  constructor() { }

  ngOnInit() {
  }

}
