import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { Person, Employee, Department, FullEmployee } from '../../models/all-models';

@Component({
    selector: 'app-display-employee-table',
    templateUrl: './display-employee-table.component.html',
    styleUrls: ['./display-employee-table.component.css']
})
export class DisplayEmployeeTableComponent implements OnInit, OnChanges {

    @Input('objects') objects: Department[]
    @Input('object') object: Department[]

    constructor() { }

    ngOnInit() {
        this.object;
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
}
