import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

import { Person, Employee, Department, FullEmployee } from '../models/all-models';
import { DisplayTableCommonComponent } from '../displayTableComponents/display-table-common/display-table-common.component';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    public employees: FullEmployee[] = [] as FullEmployee[];
    public employee: FullEmployee[];
    public departmentResponse: any[];

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
        this._employeeService.getEmployees().subscribe((data) => { this.employees = data; });
        this._employeeService.getEmployeeById(6).subscribe((data) => { this.employee = data; });
    }
}