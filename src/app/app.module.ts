import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { BaseTemplateComponent } from './base-template/base-template.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateArticleComponent,
    BaseTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: 'create-article',
        component: CreateArticleComponent
      },
      {
        path: 'home',
        component: BaseTemplateComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
