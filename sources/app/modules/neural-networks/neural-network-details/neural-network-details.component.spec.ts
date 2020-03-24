import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralNetworkDetailsComponent } from './neural-network-details.component';

describe('NeuralNetworkDetailsComponent', () => {
    let component: NeuralNetworkDetailsComponent;
    let fixture: ComponentFixture<NeuralNetworkDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NeuralNetworkDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NeuralNetworkDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
