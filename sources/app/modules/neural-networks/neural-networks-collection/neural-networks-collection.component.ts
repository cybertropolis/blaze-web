import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { INeuralNetworkModel } from './neural-network';

import { NeuralNetworksCollectionService } from './neural-networks-collection.service';


@Component({
    selector: 'blaze-neural-networks-collection',
    templateUrl: './neural-networks-collection.component.html',
    styleUrls: ['./neural-networks-collection.component.scss']
})
export class NeuralNetworksCollectionComponent {
    selectedRowIndex: number;
    displayedColumns: string[] = ['name'];
    dataSource: MatTableDataSource<INeuralNetworkModel>;

    constructor(
        private router: Router,
        private neuralNetworksCollectionService: NeuralNetworksCollectionService) {

        this.neuralNetworksCollectionService.getNeuralNetworks().subscribe((neuralNetworks: any) => {
            this.dataSource = new MatTableDataSource(neuralNetworks);
        });
    }

    details(row) {
        this.router.navigate(['/neural-network-details/', row._id.$oid]);
    }
}
