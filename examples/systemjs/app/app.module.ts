import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DataTableModule } from "ng2-data-table";
import { SearchboxModule } from "ng-bootstrap-searchbox";

@NgModule({
    imports: [BrowserModule, DataTableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
