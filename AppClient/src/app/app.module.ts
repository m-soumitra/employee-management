import { RoutesModule } from './routes.module';
import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { EmployeeService } from './providers/employee.service';
import { RegisteredEmployeesComponent } from './registered-employees.component.ts/registered-employee.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    HomeComponent,
    LayoutComponent,
    RegisteredEmployeesComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    ToasterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    PaginatorModule
  ],
  providers: [ToasterService, EmployeeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
