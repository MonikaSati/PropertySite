import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[zoomin]'
})
export class zoomin{

    constructor(private eleref: ElementRef, private renderer: Renderer2 ){}

    @HostListener('mouseenter') mouseenter(){
        //console.log("directive enter")
        this.renderer.addClass(this.eleref.nativeElement, 'zoom-in')
    }
    @HostListener('mousedown') click()
    {
        console.log("got directive clicked")
        this.renderer.addClass(this.eleref.nativeElement, 'activate')
    }

}
