import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { DataTableModule } from "ng2-data-table";
import { SearchboxModule } from "ng-bootstrap-searchbox";

@NgModule({
    imports: [BrowserModule, HttpModule, SearchboxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
