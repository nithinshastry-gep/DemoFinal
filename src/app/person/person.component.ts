import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PersonService } from '../person.service';
import { DepartmentService } from '../department.service';
import { Person, Department } from '../models/all-models';

import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

    // reactive forms start --------------------------------------------
    public title: string;
    public testForm = new FormGroup({
        id: new FormControl(null, [Validators.required]),
        name: new FormGroup({
            firstName: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
            middleName: new FormControl('G'),
            lastName: new FormControl('Shastry'),
        }),
        email: new FormControl('nithingshastry@gmail.com', [Validators.email]),
    }) 
    reactiveFormHandler(formValues) {
        console.warn(formValues);
    }
    get id() {
        return this.testForm.get('id');
    }
    get firstName() {
        return this.testForm.get('name').get('firstName');
    }
    // reactive forms end --------------------------------------------

    public persons: Person[] = [] as Person[];
    public person: Person[];
    public date: Date;

    public departments: Department[];

    public personUpdateId: string;
    public personUpdate: Person = {
        id: null,
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        age: null,
        nationality: "",
        cityAddress: "",
        bloodGroup: "",
        dateOfBirth: new Date(),
    };

    show = ['collapse', 'collapse', 'collapse'];

    constructor(private _personService: PersonService, private _departmentService: DepartmentService,
        public router: ActivatedRoute) { }

    ngOnInit() {

        this._personService.getPeople().subscribe((data) => { this.persons = <Person[]>data; });
        this._personService.getPeopleById(6).subscribe((data) => { this.person = data; });

        this._departmentService.getDepartments().subscribe((data) => { this.departments = data; });
    }

    onClickUpdatePersonUpdate(form: any) {
        this.personUpdateId = form['update']['id'];
        console.log("Person details of the id " + this.personUpdateId + " are filled in the corresponding fields");

        this._personService.getPeopleById(parseInt(this.personUpdateId))
            .subscribe((data) => {
                this.personUpdate = data[0];
                console.log("JSON Person data " + JSON.stringify(this.personUpdate));
            });
    }

    onSubmitUpdate(form: any) {

        this.personUpdateId = form['update']['id'];

        // original data from server in case the user has not used the update option
        this._personService.getPeopleById(parseInt(form['update']['id']))
            .subscribe((data) => {

                this.personUpdate = data[0];

                try {
                    this.personUpdate.firstName = form['update']['name']['firstName'];
                    this.personUpdate.middleName = form['update']['name']['middleName'];
                    this.personUpdate.lastName = form['update']['name']['lastName'];
                    this.personUpdate.age = form['update']['age'];
                    this.personUpdate.gender = form['update']['gender'];
                    this.personUpdate.bloodGroup = form['update']['bloodGroup'];
                    this.personUpdate.dateOfBirth = form['update']['dateOfBirth'];
                    this.personUpdate.nationality = form['update']['nationality'];
                    this.personUpdate.cityAddress = form['update']['cityAddress'];

                    console.log("on form Submit: " + JSON.stringify(this.personUpdate));

                } catch (e) {
                    console.error(e);
                }

                let response: string;

                // checking values
                if (this.personUpdateId != null) {
                    console.log("Using post method to send data to server");
                    this._personService.updatePerson(this.personUpdateId, this.personUpdate).subscribe((data) => {
                        console.log(data.toString());
                        console.log("Calling get method");
                        this._personService.getPeople().subscribe((data) => { this.persons = <Person[]>data; });
                    });
                }
            });
    }

    onSubmitDel(form: any) {
        let id = form['deleteId']['id'];
        if (id != null) {
            console.log("Using delete method to delete data from server")
            this._personService.delPerson(id).subscribe((response) => {
                console.log(response);
                console.log("Calling get method");
                this._personService.getPeople().subscribe((data) => { this.persons = <Person[]>data; });
            });
        }
    }

    onSubmitGet(form: any) {
        if (form['getById']['id'] != null) {
            console.log("Using get method to get data from server")
            this._personService.getPeopleById(parseInt(form['getById']['id'])).subscribe((data) => { this.person = data; });
        }
    }

    onSubmitPost(form: any) {

        let personPost: Person = {
            id: 1234, // garbge
            firstName: form['post']['name']['firstName'],
            middleName: form['post']['name']['middleName'],
            lastName: form['post']['name']['lastName'],
            age: form['post']['age'],
            gender: form['post']['gender'],
            bloodGroup: form['post']['bloodGroup'],
            dateOfBirth: form['post']['dateOfBirth'],
            nationality: form['post']['nationality'],
            cityAddress: form['post']['cityAddress'],
        };

        // console.log(JSON.stringify(personPost));

        let response: string;

        // checking values
        if (personPost.firstName != "" && personPost.lastName != "") {
            console.log("Using post method to send data to server")
            this._personService.postPerson(personPost).subscribe((data) => {
                console.log(data.body.toString());
                console.log("Calling get method");
                this._personService.getPeople().subscribe((data) => { this.persons = <Person[]>data; });
            });
        }
    }
}
