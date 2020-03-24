import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[blazeColor]'
})
export class ColorDirective implements OnInit {

    @Input() blazeColor: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        if (this.blazeColor == 'accent') {
            this.renderer.setStyle(this.element.nativeElement, 'color', '#76F1B0');
        }
    }
}
