import { TestBed, inject } from '@angular/core/testing';

import { NeuralNetworksCollectionService } from './neural-networks-collection.service';

describe('NeuralNetworksCollectionService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NeuralNetworksCollectionService]
        });
    });

    it('should be created', inject([NeuralNetworksCollectionService], (service: NeuralNetworksCollectionService) => {
        expect(service).toBeTruthy();
    }));
});
