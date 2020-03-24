import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralNetworksCollectionComponent } from './neural-networks-collection.component';

describe('NeuralNetworksCollectionComponent', () => {
    let component: NeuralNetworksCollectionComponent;
    let fixture: ComponentFixture<NeuralNetworksCollectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NeuralNetworksCollectionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NeuralNetworksCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
