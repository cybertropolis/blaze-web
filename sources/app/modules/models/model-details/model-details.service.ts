import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ModelDetailsService {

    constructor(private http: HttpClient) { }

    getModelById(id) {
        return this.http.get(`${environment.server.uri}/models/${id}`, { responseType: 'json' });
    }

    createModel(model) {
        return this.http.post(`${environment.server.uri}/models/create`, model);
    }

    updateModel(id, model) {
        return this.http.put(`${environment.server.uri}/models/update/${id}`, model);
    }

    getNeuralNetworks() {
        return this.http.get(`${environment.server.uri}/neural-networks`, { responseType: 'json' });
    }

    getLearningRateDecayTypes() {
        return this.http.get(`${environment.server.uri}/learning_rate_decay_types`, { responseType: 'json' });
    }

    getOptimizers() {
        return this.http.get(`${environment.server.uri}/optimizers`, { responseType: 'json' });
    }

}
