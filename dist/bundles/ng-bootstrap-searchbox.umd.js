(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs/Observable'), require('rxjs/Subject'), require('rxjs/BehaviorSubject'), require('rxjs/add/operator/map'), require('rxjs/add/operator/switchMap'), require('rxjs/add/operator/debounceTime'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/takeUntil')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs/Observable', 'rxjs/Subject', 'rxjs/BehaviorSubject', 'rxjs/add/operator/map', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/takeUntil'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['ng-bootstrap-searchbox'] = global.ng['ng-bootstrap-searchbox'] || {}),global.ng.core,global.ng.common,global.ng.forms,global.Rx,global.Rx,global.rxjs_BehaviorSubject));
}(this, (function (exports,_angular_core,_angular_common,_angular_forms,rxjs_Observable,rxjs_Subject,rxjs_BehaviorSubject) { 'use strict';

var SearchboxComponent = (function () {
    function SearchboxComponent(_fb) {
        this._fb = _fb;
        this._records = new rxjs_BehaviorSubject.BehaviorSubject([]);
        this.update = new _angular_core.EventEmitter();
        this.ngUnsubscribe = new rxjs_Subject.Subject();
        this.visible = false;
    }
    Object.defineProperty(SearchboxComponent.prototype, "records", {
        get: function () { return this._records.getValue(); },
        set: function (value) { this._records.next(value); },
        enumerable: true,
        configurable: true
    });
    SearchboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._fb.group({
            SearchBox: ['']
        });
        this.searchControl = this.form.controls['SearchBox'];
        this.searchControl.valueChanges
            .distinctUntilChanged()
            .debounceTime(500)
            .map(function (term) { return term != null ? term.toString().trim() : null; })
            .switchMap(function (term) { return _this.searchEntities(term); })
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) {
            _this.update.emit(data);
            console.log(data);
        });
    };
    SearchboxComponent.prototype.searchEntities = function (query) {
        var _this = this;
        var term = query === null ? '' : query.trim().toLowerCase();
        var tempList = new Array();
        if (!this.entities) {
            this.entities = this.records;
        }
        var result = new rxjs_Observable.Observable(function (observer) {
            if (term === '') {
                observer.next(_this.entities);
            }
            else {
                var keys_1 = Object.keys(_this.entities[0]);
                _this.entities.forEach(function (e) {
                    var match = false;
                    for (var _i = 0, keys_2 = keys_1; _i < keys_2.length; _i++) {
                        var key = keys_2[_i];
                        if (e[key] && e[key].toString().toLowerCase().indexOf(term) > -1) {
                            match = true;
                        }
                    }
                    if (match) {
                        tempList.push(e);
                    }
                });
                observer.next(tempList);
            }
        });
        return result;
    };
    SearchboxComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SearchboxComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'searchbox',
                    templateUrl: './searchbox.component.html'
                },] },
    ];
    /** @nocollapse */
    SearchboxComponent.ctorParameters = function () { return [
        { type: _angular_forms.FormBuilder, },
    ]; };
    SearchboxComponent.propDecorators = {
        'records': [{ type: _angular_core.Input, args: ['records',] },],
        'update': [{ type: _angular_core.Output },],
    };
    return SearchboxComponent;
}());

var SearchboxModule = (function () {
    function SearchboxModule() {
    }
    SearchboxModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [SearchboxComponent],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule
                    ],
                    exports: [SearchboxComponent]
                },] },
    ];
    /** @nocollapse */
    SearchboxModule.ctorParameters = function () { return []; };
    return SearchboxModule;
}());

exports.SearchboxModule = SearchboxModule;
exports.SearchboxComponent = SearchboxComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
