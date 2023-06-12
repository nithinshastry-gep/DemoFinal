import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Person, Employee, Department, FullEmployee } from './models/all-models';

import { Constants } from 'src/app/constats';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private _http: HttpClient, private _constants: Constants) { }

    public getPeople(): Observable<Person[]> {
        return this._http.get<Person[]>(this._constants.URLs.PERSON_GET)
            .pipe(catchError(this.errorHandler));
    }

    public getPeopleById(id: number): Observable<Person[]> {
        let queryParams = new HttpParams().append("id", id.toString());
        return this._http.get<Person[]>(this._constants.URLs.PERSON_GET_ID, { params: queryParams })
            .pipe(catchError(this.errorHandler));
    }

    public postPerson(person: Person): Observable<any> {

        const headers = { 'content-type': 'application/json' }

        return this._http.post(
            this._constants.URLs.PERSON_POST,
            person,
            {
                'headers': headers,
                'observe': 'response',
                'responseType': 'text'
            })
            .pipe(map((data: any) => { return data; }), catchError(this.errorHandler));
    }

    public delPerson(id: string): Observable<any> {

        let queryParams = new HttpParams().set("id", id);

        return this._http.delete(
            this._constants.URLs.PERSON_DEL,
            {
                params: queryParams,
                responseType: 'text',
            })
            .pipe(map((data: any) => { return data; }), catchError(this.errorHandler));
    }

    public updatePerson(id: string, person: Person): Observable<any> {

        console.log("in Update Service: " + JSON.stringify(person));

        let queryParams = new HttpParams().set("id", id);

        return this._http.put(
            this._constants.URLs.PERSON_UPD,
            person,
            {
                params: queryParams,
                responseType: 'text',
            })
            .pipe(map((data: any) => { return data; }), catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}
