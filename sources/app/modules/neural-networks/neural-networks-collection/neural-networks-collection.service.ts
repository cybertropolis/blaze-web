import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class NeuralNetworksCollectionService {

    private uri = `${environment.server.uri}/neural-networks`;

    constructor(private http: HttpClient) { }

    getNeuralNetworks() {
        return this.http.get(this.uri, { responseType: 'json' });
    }

}
