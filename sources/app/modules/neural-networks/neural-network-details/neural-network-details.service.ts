import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { INeuralNetworkDetailsModel } from './neural-network-details.model';


@Injectable({
    providedIn: 'root'
})
export class NeuralNetworkDetailsService {

    private uri = `${environment.server.uri}/neural-networks`;

    constructor(private http: HttpClient) { }

    getNeuralNetworkById(id: string): Observable<INeuralNetworkDetailsModel> {
        return this.http.get<INeuralNetworkDetailsModel>(`${this.uri}/${id}`, { responseType: 'json' });
    }

}
