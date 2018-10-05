import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { EmployeeService } from './../providers/employee.service';
import * as interfaces from './../interfaces/employee.interfaces';
import * as appConstants from './../app.constants';

@Component({
    selector: 'app-registered-users',
    templateUrl: './registered-employees.component.html'
})
export class RegisteredEmployeesComponent implements OnInit, OnDestroy {

    registeredEmployees: interfaces.EmployeeRegistrationDTO[] = [];

    cols = [];

    constructor(private _empService: EmployeeService, private _toaster: ToasterService) {

    }

    ngOnInit() {
        this._empService.fetchAllRegisteredEmployees().subscribe((response: interfaces.ServerResponse) => {
            if (response.status === appConstants.StatusCodes.INTERNAL_ERROR) {
                this._toaster.pop('error', response.message);
            } else {
                this._toaster.pop('success', response.message);
                this.registeredEmployees = response.results;
                console.log(this.registeredEmployees);
            }
        },
            error => console.log(error)
        );
        this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'gender', header: 'Gender' },
            { field: 'dob', header: 'Date Of Birth' },
            { field: 'department', header: 'Department' }
        ];
    }

    ngOnDestroy() {
        // this._subscription.forEach(sub => sub.unsubscribe());
    }

    onRowSelect(event) {
        sessionStorage.setItem('selectedRequest', JSON.stringify(event.data));
        //   this._router.navigate(['/allocate-seats']);
    }
    paginate(event) {
        // event.first = Index of the first record
        // event.rows = Number of rows to display in new page
        // event.page = Index of the new page
        // event.pageCount = Total number of pages

        console.log(event);
    }

}
