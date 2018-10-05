import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import * as interfaces from './../interfaces/employee.interfaces';


@Injectable()
export class EmployeeService {

    constructor(private _httpClient: HttpClient) { }

    private _registerEmployee = environment.employeeRegUrl;
    private _fetchRegisteredEmployees = environment.fetchRegisteredEmployees;

    public registerEmployee(employeeDetails: interfaces.EmployeeRegistrationDTO): Observable<interfaces.ServerResponse> {
        if (environment.production) {
            return this._httpClient.post(this._registerEmployee, employeeDetails).pipe(
                map((response: Response) => <any>response),
                tap(response => console.log('end progress bar here')),
                catchError(this.handleError)
            );
        } else {
            return this._httpClient.get(this._registerEmployee).pipe(
                map((response: Response) => <any>response)
            );
        }
    }

    public fetchAllRegisteredEmployees(): Observable<interfaces.ServerResponse> {
        return this._httpClient.get(this._fetchRegisteredEmployees).pipe(
            map((response: Response) => <any>response),
            tap(response => console.log('end progress bar here')),
            catchError(this.handleError)
        );
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return Observable.throw(error.json().error || 'Server error');
    }
}
