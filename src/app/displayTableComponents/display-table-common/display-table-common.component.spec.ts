import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTableCommonComponent } from './display-table-common.component';

describe('DisplayTableCommonComponent', () => {
    let component: DisplayTableCommonComponent;
    let fixture: ComponentFixture<DisplayTableCommonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DisplayTableCommonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayTableCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
