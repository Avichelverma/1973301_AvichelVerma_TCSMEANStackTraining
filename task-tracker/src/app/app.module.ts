import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	declarations: [ AppComponent, TaskFormComponent, TaskListComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatFormFieldModule,
		FormsModule,
		HttpClientModule,
		MatInputModule,
		MatButtonModule,
		MatTableModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
