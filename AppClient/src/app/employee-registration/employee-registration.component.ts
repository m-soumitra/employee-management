import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { EmployeeService } from '../providers/employee.service';
import * as interfaces from './../interfaces/employee.interfaces';
import * as appConstants from './../app.constants';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeRegistrationComponent implements OnInit, AfterViewInit {

  genders = ['Male', 'Female'];
  departments = ['Technology', 'Sales', 'HR'];
  selectedDept = 'Sales';
  employeeRegForm: FormGroup;

  constructor(private _fb: FormBuilder, private _toaster: ToasterService, private _empService: EmployeeService) {
    this.employeeRegForm = this._fb.group({
      'firstName': ['', Validators.required],
      'lastName': new FormControl('Wayne', Validators.required),
      'gender': new FormControl('Male'),
      'dob': ['1960-01-01'],
      'department': new FormControl('Technology')
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  onSubmit() {
    const employeeRegistrationDTO = <interfaces.EmployeeRegistrationDTO>{};
    employeeRegistrationDTO.firstName = this.employeeRegForm.get('firstName').value;
    employeeRegistrationDTO.lastName = this.employeeRegForm.get('lastName').value;
    employeeRegistrationDTO.gender = this.employeeRegForm.get('gender').value;
    employeeRegistrationDTO.dob = this.employeeRegForm.get('dob').value;
    employeeRegistrationDTO.department = this.employeeRegForm.get('department').value;
    console.log(employeeRegistrationDTO);

    this._empService.registerEmployee(employeeRegistrationDTO).subscribe((response: interfaces.ServerResponse) => {
      if (response.status === appConstants.StatusCodes.INTERNAL_ERROR) {
        this._toaster.pop('error', response.message);
      } else {
        if (response.results && response.results[0]) {
          this._toaster.pop('success', response.message + ' ' + (<interfaces.EmployeeRegistrationDTO>response.results[0]).firstName);
        } else {
          this._toaster.pop('success', response.message);
        }
      }
    },
      error => console.log(error)
    );
    this.employeeRegForm.patchValue({
      firstName: ''
    });
  }

}
