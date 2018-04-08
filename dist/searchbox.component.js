import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';
export var SearchboxComponent = (function () {
    function SearchboxComponent(_fb) {
        this._fb = _fb;
        this._records = new BehaviorSubject([]);
        this.update = new EventEmitter();
        this.ngUnsubscribe = new Subject();
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
        var result = new Observable(function (observer) {
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
        { type: Component, args: [{
                    selector: 'searchbox',
                    templateUrl: './searchbox.component.html'
                },] },
    ];
    /** @nocollapse */
    SearchboxComponent.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    SearchboxComponent.propDecorators = {
        'records': [{ type: Input, args: ['records',] },],
        'update': [{ type: Output },],
    };
    return SearchboxComponent;
}());
//# sourceMappingURL=searchbox.component.js.map