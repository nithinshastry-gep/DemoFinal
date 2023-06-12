import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { Person, Employee, Department, FullEmployee } from '../../models/all-models';

@Component({
    selector: 'app-display-table',
    templateUrl: './display-table.component.html',
    styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit, OnChanges {

    @Input('objects') objects: Person[]
    @Input('object') object: Person[]

    renderPersonsTable: boolean;
    renderPersonTable: boolean;

    constructor() { }

    ngOnInit() {
        this.renderPersonsTable = false;
        this.renderPersonTable = false;
    }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.objects !== undefined && !this.renderPersonsTable) {
            this.renderPersonsTable = true;
        }

        if (this.object !== undefined && !this.renderPersonTable) {
            this.renderPersonTable = true;
        }

    }
}