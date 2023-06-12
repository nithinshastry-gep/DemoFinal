import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { Person, Employee, Department, FullEmployee } from './models/all-models';

import { Constants } from 'src/app/constats';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    constructor(private _http: HttpClient, private _constants: Constants) { }

    public getDepartments(): Observable<Department[]> {
        return this._http.get<Department[]>(this._constants.URLs.DEPARTMENT_GET)
            .pipe(catchError(this.errorHandler));
    }

    public getDepartmentsById(id: number): Observable<Department[]> {
        let queryParams = new HttpParams().append("id", id.toString());
        return this._http.get<Department[]>(this._constants.URLs.DEPARTMENT_GET_ID, { params: queryParams })
            .pipe(catchError(this.errorHandler));
    }

    public postDepartment(department: Department): Observable<any> {

        const { id, ...rest } = department;
        const projectedDepartment = rest;

        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(projectedDepartment);
        console.log(body)
        return this._http.post<any>(
            this._constants.URLs.DEPARTMENT_POST,
            body,
            {
                'headers': headers,
                'observe': 'response',
                'responseType': 'json'
            }
        )
            .pipe(map((data: any) => { return data; }), catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}
