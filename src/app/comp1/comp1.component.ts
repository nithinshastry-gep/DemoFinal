import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { DepartmentService } from '../department.service';
import { EmployeeService } from '../employee.service';

import { Person, Employee, Department, FullEmployee } from '../models/all-models';

@Component({
    selector: 'app-comp1',
    templateUrl: './comp1.component.html',
    styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

    public persons: Person[] = [] as Person[];
    public departments: Department[] = [] as Department[];
    public employees: FullEmployee[] = [] as FullEmployee[];

    public person: Person[];
    public department: Department[];
    public employee: FullEmployee[];

    public departmentResponse: any[];

    constructor(private _personService: PersonService, private _departmentService: DepartmentService, private _employeeService: EmployeeService) { }

    ngOnInit() {
        this._personService.getPeople().subscribe((data) => { this.persons = <Person[]>data; });
        this._personService.getPeopleById(6).subscribe((data) => { this.person = data; });

        this._departmentService.getDepartments().subscribe((data) => { this.departments = data; });
        this._departmentService.getDepartmentsById(5).subscribe((data) => { this.department = data; });
        this._departmentService.postDepartment(null).subscribe((data) => { this.departmentResponse = data; })

        this._employeeService.getEmployees().subscribe((data) => { this.employees = data; });
        this._employeeService.getEmployeeById(6).subscribe((data) => { this.employee = data; });
    }
}
