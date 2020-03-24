import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormArray } from '@angular/forms';

import { ModelDetailsService } from './model-details.service';


@Component({
    selector: 'blaze-model-details',
    templateUrl: './model-details.component.html',
    styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {

    id: string;

    waiting: boolean;

    neural_networks = [];
    learning_rate_decay_types = [];
    optimizers = [];

    modelForm = this.formBuilder.group({
        name: [''],
        neural_network_id: [''],
        labels: this.formBuilder.array([]),
        inputs: this.formBuilder.group({
            test_path: [''],
            train_path: [''],
            validation_path: ['']
        }),
        outputs: this.formBuilder.group({
            serving_path: ['']
        }),
        learning_rate: this.formBuilder.group({
            replicas_to_aggregate: [''],
            label_smoothing: [''],
            epochs_per_decay: [''],
            moving_average_decay: [''],
            sync_replicas: [''],
            learning_rate_decay_type_id: [''],
            exponential: this.formBuilder.group({
                learning_rate: [''],
                decay_factor: [''],
                staircase: ['']
            }),
            fixed: this.formBuilder.group({
                learning_rate: [''],
            }),
            polynomial: this.formBuilder.group({
                learning_rate: [''],
                end_learning_rate: [''],
                power: [''],
                cycle: ['']
            })
        }),
        optimization: this.formBuilder.group({
            weight_decay: [''],
            optimizer_id: 'rmsprop',
            rmsprop: this.formBuilder.group({
                decay: [''],
                momentum: [''],
                epsilon: ['']
            }),
            momentum: this.formBuilder.group({
                momentum: ['']
            }),
            adam: this.formBuilder.group({
                beta1: [''],
                beta2: [''],
                epsilon: ['']
            }),
            ftrl: this.formBuilder.group({
                learning_rate_power: [''],
                initial_accumulator_value: [''],
                l1: [''],
                l2: ['']
            }),
            adadelta: this.formBuilder.group({
                rho: [''],
                epsilon: ['']
            }),
            adagrad: this.formBuilder.group({
                initial_accumulator_value: ['']
            })
        }),
        fine_tuning: this.formBuilder.group({
            checkpoint_path: [''],
            ignore_missing_variables: [''],
            trainable_scopes: this.formBuilder.array([]),
            checkpoint_excluded_paths: this.formBuilder.array([])
        }),
        situations: this.formBuilder.group({
            testing: [''],
            training: [''],
            validating: ['']
        })
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private modelDetailsService: ModelDetailsService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(routeParams => {
            this.id = routeParams['id'];

            if (this.id) {
                this.refresh();
            }
        });

        this.modelDetailsService.getNeuralNetworks().subscribe((neural_networks: any) => {
            for (let neural_network of neural_networks) {
                this.neural_networks.push({
                    value: neural_network._id.$oid,
                    viewValue: neural_network.name
                });
            }
        });

        this.modelDetailsService.getLearningRateDecayTypes().subscribe((learning_rate_decay_types: any) => {
            for (let learning_rate_decay_type of learning_rate_decay_types) {
                this.learning_rate_decay_types.push({
                    value: learning_rate_decay_type._id,
                    viewValue: learning_rate_decay_type.name
                });
            }
        });

        this.modelDetailsService.getOptimizers().subscribe((optimizers: any) => {
            for (let optimizer of optimizers) {
                this.optimizers.push({
                    value: optimizer._id,
                    viewValue: optimizer.name
                });
            }
        });
    }

    refresh() {
        this.modelDetailsService.getModelById(this.id).subscribe((model: any) => {
            this.id = model._id.$oid;

            for (let label of model.labels) {
                this.labels.push(this.formBuilder.control(label));
            }

            for (let trainable_scope of model.fine_tuning.trainable_scopes) {
                this.trainable_scopes.push(this.formBuilder.control(trainable_scope));
            }

            for (let checkpoint_excluded_path of model.fine_tuning.checkpoint_excluded_paths) {
                this.checkpoint_excluded_paths.push(this.formBuilder.control(checkpoint_excluded_path));
            }

            this.modelForm.patchValue({
                name: model.name,
                neural_network_id: model.neural_network_id,
                learning_rate: model.learning_rate,
                inputs: model.inputs,
                outputs: model.outputs,
                optimization: model.optimization,
                fine_tuning: model.fine_tuning
            });
        });
    }



    get name() {
        return this.modelForm.get('name').value;
    }

    get labels() {
        return this.modelForm.get('labels') as FormArray;
    }

    get trainable_scopes() {
        return this.modelForm.get('fine_tuning').get('trainable_scopes') as FormArray;
    }

    get checkpoint_excluded_paths() {
        return this.modelForm.get('fine_tuning').get('checkpoint_excluded_paths') as FormArray;
    }

    get learning_rate_decay_type_id() {
        return this.modelForm.get('learning_rate').get('learning_rate_decay_type_id').value;
    }

    get optimizer_id() {
        return this.modelForm.get('optimization').get('optimizer_id').value;
    }



    insertLabel() {
        this.labels.insert(0, this.formBuilder.control(''));
    }

    removeLabel(index) {
        this.labels.removeAt(index);
    }



    insertTrainableScope() {
        this.trainable_scopes.insert(0, this.formBuilder.control(''));
    }

    removeTrainableScope(index) {
        this.trainable_scopes.removeAt(index);
    }



    insertCheckpointPathToExclude() {
        this.checkpoint_excluded_paths.insert(0, this.formBuilder.control(''));
    }

    removeCheckpointPathToExclude(index) {
        this.checkpoint_excluded_paths.removeAt(index);
    }



    save() {
        this.waiting = true;
        const model = this.modelForm.getRawValue();

        if (this.id) {
            this.modelDetailsService
                .updateModel(this.id, model)
                .subscribe(() => {
                    this.waiting = false;
                });
        } else {
            this.modelDetailsService
                .createModel(model)
                .subscribe((response: any) => {
                    this.router.navigate(['/model-details', response.data.id]);
                    this.waiting = false;
                });
        }
    }

    back() {
        this.router.navigate(['/models-collection']);
    }

}
