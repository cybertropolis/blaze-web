import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorDirective } from './color.directive';
import { BoldDirective } from './bold.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ColorDirective, BoldDirective],
    declarations: [ColorDirective, BoldDirective]
})
export class DirectivesModule { }
