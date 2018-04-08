import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchboxComponent } from './searchbox.component';
export var SearchboxModule = (function () {
    function SearchboxModule() {
    }
    SearchboxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SearchboxComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [SearchboxComponent]
                },] },
    ];
    /** @nocollapse */
    SearchboxModule.ctorParameters = function () { return []; };
    return SearchboxModule;
}());
//# sourceMappingURL=searchbox.module.js.map