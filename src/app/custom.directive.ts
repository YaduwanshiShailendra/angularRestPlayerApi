import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";
@Directive({
  selector: "[red]" //directive name
})
export class CustomDirective {
  constructor(
    el: ElementRef //di
  ) {
    el.nativeElement.style.background = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.borderRadius = "4px";
  }
  @HostBinding("style.background") background: string = "red";
  @HostBinding("style.transform") transform: string;
  @HostBinding("style.transition") transition: string;
  @HostListener("mouseenter") mouseenter() {
    console.log("mouse entered😃");
    this.background = "blue";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }

  @HostListener("mouseleave") mouseleave() {
    console.log("mouse leave😂");
    this.background = "purple";
    this.transform = "rotate(360deg)";
    this.transition = "all 5s";
  }
}
