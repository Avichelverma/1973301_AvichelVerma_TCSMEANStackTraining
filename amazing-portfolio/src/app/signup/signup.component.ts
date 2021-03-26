import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
	signupRef = new FormGroup({
		firstname: new FormControl(),
		lastname: new FormControl(),
		username: new FormControl(),
		password: new FormControl()
	});

	constructor(private router: Router) {}

	ngOnInit(): void {}

	signupSubmit() {
		sessionStorage.setItem('userDetails', JSON.stringify(this.signupRef.value));
		this.router.navigate([ '/login' ]);
	}
}
