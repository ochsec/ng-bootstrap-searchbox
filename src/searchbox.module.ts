import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchboxComponent } from './searchbox.component';

@NgModule({
  declarations: [SearchboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SearchboxComponent]
})
export class SearchboxModule { }
