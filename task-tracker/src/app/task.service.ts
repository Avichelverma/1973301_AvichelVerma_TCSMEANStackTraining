import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	constructor(public http: HttpClient) {}

	storeTask(task: any) {
		this.http.post('http://localhost:3000/tasks', task).subscribe((result) => console.log(result), (error) => console.log(error));
	}

	getTaskList() {
		return this.http.get('http://localhost:3000/tasks');
	}
}
