(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm': 'node_modules'
        },
        // map tells the system where to look for things
        map: {
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'ng-bootstrap-searchbox': 'npm:ng-bootstrap-searchbox/bundles/ng-bootstrap-searchbox.umd.min.js',
            'ng2-data-table': 'npm:ng2-data-table/bundles/angular2-data-table.umd.min.js'
        },
        // packages tell the System loader how to load when no filename and/or no extension
        packages: {
            lib: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);