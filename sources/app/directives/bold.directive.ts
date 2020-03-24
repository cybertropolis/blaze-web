import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[blazeBold]'
})
export class BoldDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'fontWeight', 'bold');
    }
}
