import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { Person, Employee, Department, FullEmployee } from '../../models/all-models';

@Component({
    selector: 'app-display-table-common',
    templateUrl: './display-table-common.component.html',
    styleUrls: ['./display-table-common.component.css']
})
export class DisplayTableCommonComponent implements OnInit, OnChanges {

    @Input('objects') objects: any[]
    @Input('displayName') displayName: string;

    objectKeys: any[];
    typeArray: any[];
    objectsKeyMap: any[];
    renderObjectsTable: boolean;

    constructor() { }

    ngOnInit() {
        this.renderObjectsTable = false;

        this.typeArray = [];

        this.generateKeys();
        this.generateArray();
        this.generateTypes();
    }

    ngOnChanges(changes: SimpleChanges): void {

        this.generateKeys();
        this.generateArray();
        this.generateTypes();

        if (this.objects !== undefined && !this.renderObjectsTable) {
            this.renderObjectsTable = true;
        }

        console.log(this.objectsKeyMap);
    }

    generateKeys() {
        if (this.objects !== undefined) {
            this.objects.forEach((element: any) => {
                if (this.objectKeys === undefined)
                    this.objectKeys = Object.keys(element);
            });
        }
    }

    // TODO, use datatypes to modify displayed data
    generateTypes() {
        if (this.objects !== undefined) {
            this.objects.forEach((element: any) => {
                if (this.typeArray.length === 0) {
                    Object.keys(element).forEach(key => {
                        this.typeArray.push(typeof(element[key]));
                    })
                }
            });
        }
    }

    generateArray() {
        let objectsMap: Array<any> = [];

        if (this.objects !== undefined) {
            this.objects.forEach((element: any) => {
                let arr: Array<any> = [[], []];

                if (element !== undefined) {
                    for(let i in element) {
                        if (arr[0].length === 0) {
                            arr[0].push(element[i]);
                        }
                        else {
                            arr[1].push(element[i])
                        }
                    }
                }

                objectsMap.push(arr);
            });
        }
        this.objectsKeyMap = objectsMap;
    }
}
