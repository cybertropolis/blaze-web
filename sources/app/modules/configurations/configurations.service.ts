import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ConfigurationsService {

    private uri = `${environment.server.uri}/configurations`;

    constructor(private http: HttpClient) { }

    getConfigurations() {
        return this.http.get(this.uri, { responseType: 'json' });
    }

    saveConfigurations(configurations) {
        return this.http.post(`${this.uri}/save`, configurations);
    }
}
