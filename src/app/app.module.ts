import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { PersonComponent } from './person/person.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayTableComponent } from './displayTableComponents/display-table/display-table.component';

import { Constants } from 'src/app/constats';
import { DisplayDepartmentTableComponent } from './displayTableComponents/display-department-table/display-department-table.component';
import { DisplayEmployeeTableComponent } from './displayTableComponents/display-employee-table/display-employee-table.component';
import { DisplayTableCommonComponent } from './displayTableComponents/display-table-common/display-table-common.component';

@NgModule({
    declarations: [
        AppComponent,
        Comp1Component,
        PersonComponent,
        DepartmentComponent,
        EmployeeComponent,
        SidebarComponent,
        NavbarComponent,
        DisplayTableComponent,
        DisplayDepartmentTableComponent,
        DisplayEmployeeTableComponent,
        DisplayTableCommonComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [Constants],
    bootstrap: [AppComponent]
})
export class AppModule { }
