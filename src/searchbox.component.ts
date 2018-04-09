import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';

@Component({
    selector: 'searchbox',
    templateUrl: './searchbox.component.html',
})
export class SearchboxComponent implements OnInit, OnDestroy {
    private _records = new BehaviorSubject<Array<any>>([]);
    @Input('records') 
    set records(value) { this._records.next(value); }
    get records() { return this._records.getValue(); }
    @Output() update = new EventEmitter<Array<any>>();
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    visible = false;
    searchControl: AbstractControl;
    entities: Array<any>;
    form: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.form = this._fb.group({
            SearchBox: ['']
        });

        this.searchControl = this.form.controls['SearchBox'];

        this.searchControl.valueChanges
            .distinctUntilChanged()
            .debounceTime(500)
            .map((term: string) => term != null ? term.toString().trim() : null)
            .switchMap((term: string) => this.searchEntities(term))
            .takeUntil(this.ngUnsubscribe)
            .subscribe(data => {
                this.update.emit(data);
                console.log(data);
            });
    }

    searchEntities(query: string): Observable<Array<any>> {
        const term = query === null ? '' : query.trim().toLowerCase();
        const tempList = new Array<any>();
        if (!this.entities) {
          this.entities = this.records;
        }
        const result = new Observable<Array<any>>(observer => {
            if (term === '') {
                observer.next(this.entities);
            } else {
                const keys = Object.keys(this.entities[0]);
                this.entities.forEach(e => {
                    let match = false;
                    for (const key of keys) {
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
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
