import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeeTableComponent } from './display-employee-table.component';

describe('DisplayEmployeeTableComponent', () => {
    let component: DisplayEmployeeTableComponent;
    let fixture: ComponentFixture<DisplayEmployeeTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DisplayEmployeeTableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayEmployeeTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
