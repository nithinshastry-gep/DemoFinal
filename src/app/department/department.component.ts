import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '../department.service';

import { Person, Employee, Department, FullEmployee } from '../models/all-models';
import { DisplayTableCommonComponent } from '../displayTableComponents/display-table-common/display-table-common.component';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

    public departments: Department[] = [] as Department[];
    public department: Department[] = [] as Department[];
    public departmentResponse: any[];

    constructor(private _departmentService: DepartmentService) { }

    ngOnInit() {
        this._departmentService.getDepartments().subscribe((data) => { this.departments = data; });
        this._departmentService.getDepartmentsById(1).subscribe((data) => { this.department = data; });
        // this._departmentService.postDepartment().subscribe((data) => {this.departmentResponse = data;})
    }

    onSubmitGet(form: any) {
        if (form['getById']['id'] != null) {
            console.log("Using get method to get data from server")
            this._departmentService.getDepartmentsById(parseInt(form['getById']['id'])).subscribe((data) => { this.department = data; });
        }
    }
}
