import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	constructor(public http: HttpClient) {}

	getQuestionList() {
		return this.http.get('assets/question.json');
	}
}
