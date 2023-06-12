import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDepartmentTableComponent } from './display-department-table.component';

describe('DisplayDepartmentTableComponent', () => {
    let component: DisplayDepartmentTableComponent;
    let fixture: ComponentFixture<DisplayDepartmentTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DisplayDepartmentTableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayDepartmentTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
