import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	loginRef = new FormGroup({
		username: new FormControl(),
		password: new FormControl()
	});

	messageShow: Boolean = false;
	message: String = '';

	constructor(private router: Router) {}

	ngOnInit(): void {}

	loginSubmit() {
		let { username, password } = this.loginRef.value;
		let userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
		if (userDetails.username !== username) {
			this.message = 'Invalid Username';
			this.messageShow = true;
		} else if (userDetails.password !== password) {
			this.message = 'Invalid Password';
			this.messageShow = true;
		} else {
			sessionStorage.setItem('token', 'true');
			this.router.navigate([ '/portfolio' ]);
		}
	}
}
