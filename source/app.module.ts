import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
	declarations: [
		AppComponent,
		CreateArticleComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
		{
			path: 'create-article',
			component: CreateArticleComponent
		},
		{
			path: '',
			redirectTo: '/create-article',
			pathMatch: 'full'
		}
		])
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);