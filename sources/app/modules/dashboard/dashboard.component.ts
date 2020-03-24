import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';


@Component({
    selector: 'blaze-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    models = {
        total: 0
    };
    neuralNetworks = {
        total: 0
    };

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.dashboardService.getModels().subscribe((models: any) => {
            this.models = models;
        });
        this.dashboardService.getNeuralNetworks().subscribe((neuralNetworks: any) => {
            this.neuralNetworks = neuralNetworks;
        });
    }
}
