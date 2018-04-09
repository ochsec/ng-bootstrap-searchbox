import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBootstrapSearchboxComponent } from './ng-bootstrap-searchbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NgBootstrapSearchboxComponent],
  exports: [NgBootstrapSearchboxComponent]
})
export class NgBootstrapSearchboxModule { }
