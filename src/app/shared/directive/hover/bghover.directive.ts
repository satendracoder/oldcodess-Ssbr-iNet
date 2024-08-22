import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBghover]'
})
export class BghoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostBinding('bgColor') bgColor?: String;

  @HostListener('mouseover') onMouseOver() {
    window.alert("hover");
    // this.el.nativeElement.style.backgroundColor = "yellow"
  }

}
