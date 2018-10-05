export interface EmployeeRegistrationDTO {
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    department: string;
}

export interface ServerResponse {
    results: any;
    status: number;
    message: string;
}
