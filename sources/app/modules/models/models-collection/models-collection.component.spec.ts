import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsCollectionComponent } from './models-collection.component';

describe('ModelsCollectionComponent', () => {
    let component: ModelsCollectionComponent;
    let fixture: ComponentFixture<ModelsCollectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModelsCollectionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModelsCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
