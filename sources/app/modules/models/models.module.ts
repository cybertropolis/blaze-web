import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

import {
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { ModelsCollectionComponent } from './models-collection/models-collection.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { DirectivesModule } from '../../directives/directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatSliderModule,
        MatToolbarModule,
        MatSelectModule,
        MatTabsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,

        DirectivesModule
    ],
    declarations: [ModelsCollectionComponent, ModelDetailsComponent]
})
export class ModelsModule { }
