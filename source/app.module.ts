import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
	declarations: [
		AppComponent,
		CreateArticleComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);