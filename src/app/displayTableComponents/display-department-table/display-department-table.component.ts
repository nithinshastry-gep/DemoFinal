import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Person, Employee, Department, FullEmployee } from '../../models/all-models';

@Component({
    selector: 'app-display-department-table',
    templateUrl: './display-department-table.component.html',
    styleUrls: ['./display-department-table.component.css']
})
export class DisplayDepartmentTableComponent implements OnInit, OnChanges {

    @Input('objects') objects: Department[]
    @Input('object') object: Department[]

    renderDepartmentsTable: boolean;
    renderDepartmentTable: boolean;

    constructor() { }

    ngOnInit() {
        this.renderDepartmentTable = false;
        this.renderDepartmentsTable = false;
    }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.objects !== undefined && !this.renderDepartmentsTable) {
            this.renderDepartmentsTable = true;
        }

        if (this.object !== undefined && !this.renderDepartmentTable) {
            this.renderDepartmentTable = true;
        }

    }
}
