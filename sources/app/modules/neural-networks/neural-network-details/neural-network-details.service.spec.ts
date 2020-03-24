import { TestBed, inject } from '@angular/core/testing';

import { NeuralNetworkDetailsService } from './neural-network-details.service';

describe('NeuralNetworkDetailsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NeuralNetworkDetailsService]
        });
    });

    it('should be created', inject([NeuralNetworkDetailsService], (service: NeuralNetworkDetailsService) => {
        expect(service).toBeTruthy();
    }));
});
