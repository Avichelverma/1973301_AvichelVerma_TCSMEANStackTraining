import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	constructor(public questionService: QuestionService) {}

	ngOnInit() {
		this.questionService.getQuestionList().subscribe((res) => {
			let responseObject: any = res;
			responseObject.questions.forEach((question: any) => {
				let q = new Question(question.id, question.question, question.a, question.b, question.c, question.d, question.answer);
				this.questionList.push(q);
			});
		});
	}

	title = 'online-quiz';

	isReview: boolean = false;
	totalAnswered: number = 0;
	correctAnswered: number = 0;

	answerList: any = [];
	questionList: any = [];

	submitTest(submissionRef: any) {
		for (let i = 1; i <= this.questionList.length; i++) {
			let answer = {
				question: this.questionList[i - 1].question,
				answer: this.questionList[i - 1].answer,
				selected: submissionRef[i],
				color: 'red'
			};
			if (submissionRef[i] !== undefined) {
				this.totalAnswered++;
				if (submissionRef[i] == this.questionList[i - 1].answer) {
					this.correctAnswered++;
					answer.color = 'green';
				}
			}
			this.answerList.push(answer);
		}
		this.isReview = true;
	}

	onRetry() {
		this.totalAnswered = 0;
		this.correctAnswered = 0;
		this.answerList = [];
		this.isReview = false;
	}
}
