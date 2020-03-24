import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) { }

    getModels() {
        return this.http.get(`${environment.server.uri}/models/status`);
    }

    getNeuralNetworks() {
        return this.http.get(`${environment.server.uri}/neural-networks/status`);
    }
}
