import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @Input() backgroundColor='';

  constructor(private element: ElementRef) {
    //never do this
    setTimeout(()=>{
    this.element.nativeElement.style.backgroundColor = this.backgroundColor}, 50)
  }


}
