import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgBootstrapSearchboxModule } from './modules/ng-bootstrap-searchbox/ng-bootstrap-searchbox.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgBootstrapSearchboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
