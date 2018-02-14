export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/ng-bootstrap-searchbox.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng.ng-bootstrap-searchbox',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'@angular/forms': 'ng.forms',
		'rxjs/Observable': 'Rx',
		'rxjs/Subject': 'Rx',
		'rxjs/Subscription': 'Rx',
		'rxjs/add/operator/map': 'Rx.Observable.prototype',
		'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
		'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
		'rxjs/add/operator/distinctUntilChanged': 'Rx.Observable.prototype',
		'rxjs/add/operator/takeUntil': 'Rx.Observable.prototype'
	}
}
