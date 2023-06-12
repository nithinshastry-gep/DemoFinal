export class Constants {
    public webApiUrl: any;
    public URLs: any;

    constructor() {

        this.webApiUrl = "http://localhost:62903";

        this.URLs = {
            // Person table
            PERSON_GET: this.webApiUrl + "/GetPeople",
            PERSON_GET_ID: this.webApiUrl + "/GetPersonById",
            PERSON_POST: this.webApiUrl + "/PostPerson",
            PERSON_DEL: this.webApiUrl + "/DeletePerson",
            PERSON_UPD: this.webApiUrl + "/UpdatePerson",

            // Department table
            DEPARTMENT_GET: this.webApiUrl + "/GetDepartments",
            DEPARTMENT_GET_ID: this.webApiUrl + "/GetDepartmentById",
            DEPARTMENT_POST: this.webApiUrl + "/PostDepartment",
            DEPARTMENT_DEL: this.webApiUrl + "/GetPeople",

            // Employee table
            EMPLOYEE_GET: this.webApiUrl + "/GetEmployees",
            EMPLOYEE_GET_ID: this.webApiUrl + "/GetEmployeesById",
        }
    }
}
