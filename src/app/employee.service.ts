import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Person, Employee, Department, FullEmployee } from './models/all-models';

import { Constants } from 'src/app/constats';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private _http: HttpClient, private _constants: Constants) { }

    public getEmployees(): Observable<FullEmployee[]> {
        return this._http.get<FullEmployee[]>(this._constants.URLs.EMPLOYEE_GET)
            .pipe(catchError(this.errorHandler));
    }

    public getEmployeeById(id: number): Observable<FullEmployee[]> {
        let queryParams = new HttpParams().append("id", id.toString());
        return this._http.get<FullEmployee[]>(this._constants.URLs.EMPLOYEE_GET_ID, { params: queryParams })
            .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}
