import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ModelsCollectionService {

    constructor(private http: HttpClient) { }

    getModels() {
        return this.http.get(`${environment.server.uri}/models`, { responseType: 'json' });
    }

    test(id: string, testing: boolean) {
        return this.http.post(`${environment.server.uri}/models/test/${id}`, {
            situations: {
                testing: testing
            }
        });
    }

    train(id: string, training: boolean) {
        return this.http.post(`${environment.server.uri}/models/train/${id}`, {
            situations: {
                training: training
            }
        });
    }

    validate(id: string, validating: boolean) {
        return this.http.post(`${environment.server.uri}/models/validate/${id}`, {
            situations: {
                validating: validating
            }
        });
    }
}
