import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { DataTableModule } from "ng2-data-table";
import { SearchboxModule } from "ng-bootstrap-searchbox";

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SearchboxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
