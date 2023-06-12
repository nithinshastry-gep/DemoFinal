import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    { path: '', redirectTo: 'Person', pathMatch: 'full' },
    {
        path: 'Person',
        children: [
            { path: '', redirectTo: 'get', pathMatch: 'full' },
            { path: 'get', component: PersonComponent },
            { path: 'getById', component: PersonComponent },
            { path: 'post', component: PersonComponent },
            { path: 'delete', component: PersonComponent },
            { path: 'update', component: PersonComponent },
        ]
    },
    {
        path: 'Department',
        children: [
            { path: '', redirectTo: 'get', pathMatch: 'full' },
            { path: 'get', component: DepartmentComponent },
            { path: 'getById', component: DepartmentComponent },
            { path: 'post', component: DepartmentComponent },
            { path: 'delete', component: DepartmentComponent },
            { path: 'update', component: DepartmentComponent },
        ]
    },
    {
        path: 'Employee',
        children: [
            { path: '', redirectTo: 'get', pathMatch: 'full' },
            { path: 'get', component: EmployeeComponent },
            { path: 'getById', component: EmployeeComponent },
            { path: 'post', component: EmployeeComponent },
            { path: 'delete', component: EmployeeComponent },
            { path: 'update', component: EmployeeComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
