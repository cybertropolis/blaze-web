import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'blaze-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
    animations: [
        trigger('collapse', [
            state('opened', style({
                opacity: '1',
                display: 'block',
                transform: 'translate3d(0, 0, 0)'
            })),
            state('closed', style({
                opacity: '0',
                display: 'none',
                transform: 'translate3d(-100%, 0, 0)'
            })),
            transition('closed => opened', animate('200ms ease-in')),
            transition('opened => closed', animate('200ms ease-out'))
        ])
    ]
})
export class SideNavigationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
