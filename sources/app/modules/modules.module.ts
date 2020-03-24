import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ModelsModule } from './models/models.module';

@NgModule({
    imports: [
        CommonModule,

        FlexLayoutModule,

        ModelsModule
    ],
    exports: [ModelsModule]
})
export class ModulesModule { }
