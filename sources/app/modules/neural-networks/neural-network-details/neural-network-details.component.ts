import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { ModelDetailsService } from '../../models/model-details/model-details.service';
import { NeuralNetworkDetailsService } from './neural-network-details.service';
import { INeuralNetworkDetailsModel } from './neural-network-details.model';

@Component({
    selector: 'blaze-neural-network-details',
    templateUrl: './neural-network-details.component.html',
    styleUrls: ['./neural-network-details.component.scss']
})
export class NeuralNetworkDetailsComponent implements OnInit {

    id: string;

    neuralNetworkForm = this.formBuilder.group({
        name: ['']
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private neuralNetworkDetailsService: NeuralNetworkDetailsService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(routeParams => {
            this.id = routeParams['id'];

            this.neuralNetworkDetailsService
                .getNeuralNetworkById(this.id)
                .subscribe((neuralNetwork: INeuralNetworkDetailsModel) => {
                    this.neuralNetworkForm.patchValue({
                        name: neuralNetwork.name
                    });
                });
        });
    }

    onSubmit() {

    }

    back() {
        this.router.navigate(['/neural-networks-collection']);
    }
}
