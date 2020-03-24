import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ConfigurationsService } from 'sources/app/modules/configurations/configurations.service';


@Component({
    selector: 'blaze-configurations',
    templateUrl: './configurations.component.html',
    styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent {

    id: string;
    
    waiting = false;

    configurationsForm = this.formBuilder.group({
        baseDirectory: ['']
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private configurationsService: ConfigurationsService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(routeParams => {
            this.id = routeParams['id'];

            this.configurationsService.getConfigurations().subscribe((configurations: any) => {
                this.id = configurations._id;

                this.configurationsForm.patchValue({
                    baseDirectory: configurations.baseDirectory
                });
            });
        });
    }

    save() {
        this.waiting = true;
        const model = this.configurationsForm.getRawValue();
        model._id = this.id;

        this.configurationsService
            .saveConfigurations(model)
            .subscribe(() => {
                this.waiting = false;
            });
    }

}
