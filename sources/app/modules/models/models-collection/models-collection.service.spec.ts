import { TestBed, inject } from '@angular/core/testing';

import { ModelsCollectionService } from './models-collection.service';

describe('ModelsCollectionService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ModelsCollectionService]
        });
    });

    it('should be created', inject([ModelsCollectionService], (service: ModelsCollectionService) => {
        expect(service).toBeTruthy();
    }));
});
