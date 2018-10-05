import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisteredEmployeesComponent } from './registered-employees.component.ts/registered-employee.component';


export const ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'registration', component: EmployeeRegistrationComponent },
            { path: 'registeredemployees', component: RegisteredEmployeesComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    exports: [RouterModule]
})
export class RoutesModule { }
