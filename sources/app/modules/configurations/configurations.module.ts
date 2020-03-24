import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material';

import { ConfigurationsComponent } from './configurations.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule
    ],
    exports: [ConfigurationsComponent],
    declarations: [ConfigurationsComponent]
})
export class ConfigurationsModule { }
