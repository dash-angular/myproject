import { Directive,ElementRef,OnInit,Input,HostListener,Renderer } from '@angular/core';


@Directive({
  selector: '[appMydir]'
})
export class MydirDirective implements OnInit {
  @Input() myvar;
  @Input() myvar1;


  constructor(private el:ElementRef,private re:Renderer) 
  {

   }
@HostListener('mouseover') onMouseOver(){
  this.for_border(true)
}
@HostListener('mouseout') onMouseOut(){
  this.for_border(false)
}

for_border(type){
  if(type){
    // this.el.nativeElement.style.boarder="2px solid"
    this.re.setElementStyle(this.el.nativeElement,"border","3px solid #eeeeee")
    this.re.setElementClass(this.el.nativeElement,"apply_class",true);
  }
  else{
    //this.el.nativeElement.style.boarder="none";
    this.re.setElementStyle(this.el.nativeElement,"border","none")
    this.re.setElementClass(this.el.nativeElement,"apply_class",false);

  }
}

ngOnInit(){
  console.log(this.el)
  console.log(this.myvar1)
  this.el.nativeElement.innerHTML=`
  <img src='assets/images/home/${this.myvar[2]}'class='img-fluid'/>
  <h2>${this.myvar[1]}</h2>
  <p>${this.myvar[0]}</p>
  <p><button class='btn'> Add to cart </button>${this.myvar1}</p>
  `
}
}
