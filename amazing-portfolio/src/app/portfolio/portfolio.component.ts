import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: [ './portfolio.component.css' ]
})
export class PortfolioComponent implements OnInit {
	contactList: Array<Contact> = new Array();

	contactRef = new FormGroup({
		name: new FormControl(),
		phone: new FormControl()
	});

	firstName: String = '';

	constructor() {
		let { firstname } = JSON.parse(sessionStorage.getItem('userDetails'));
		this.firstName = firstname;
	}

	ngOnInit(): void {}

	onAddContact() {
		let { name, phone } = this.contactRef.value;
		let contact = new Contact(name, phone);
		this.contactList.push(contact);
		this.contactRef.reset();
	}
}
