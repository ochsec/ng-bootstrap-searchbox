import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';
export declare class SearchboxComponent implements OnInit, OnDestroy {
    private _fb;
    private _records;
    records: any[];
    update: EventEmitter<any[]>;
    private ngUnsubscribe;
    visible: boolean;
    searchControl: AbstractControl;
    entities: Array<any>;
    form: FormGroup;
    constructor(_fb: FormBuilder);
    ngOnInit(): void;
    searchEntities(query: string): Observable<Array<any>>;
    ngOnDestroy(): void;
}
