import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatToolbarModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatCardModule,
        MatToolbarModule
    ],
    exports: [DashboardComponent],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
