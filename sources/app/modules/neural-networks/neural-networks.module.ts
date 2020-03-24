import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule
} from '@angular/material';

import { NeuralNetworksCollectionComponent } from './neural-networks-collection/neural-networks-collection.component';
import { NeuralNetworkDetailsComponent } from './neural-network-details/neural-network-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatSliderModule
    ],
    declarations: [NeuralNetworksCollectionComponent, NeuralNetworkDetailsComponent]
})
export class NeuralNetworksModule { }
