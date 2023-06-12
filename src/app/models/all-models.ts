export interface Person {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    gender: string;
    bloodGroup: string;
    dateOfBirth: Date;
    nationality: string;
    cityAddress: string;
}

export interface Department {
    id: number;
    name: string;
}

export interface Employee {
    id: number;
    batch: string;
    departmentId: number;
}

export interface FullEmployee {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    gender: string;
    bloodGroup: string;
    dateOfBirth: string;
    nationality: string;
    cityAddress: string;
    batch: string;
    departmentName: string;
}