import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { StudentEditComponent } from './student.edit.component';
@NgModule({
    declarations: [StudentEditComponent],
  imports: [
      RouterModule,
      FormsModule,
      BrowserModule,
      HttpClientModule,
      HttpModule,
      DropDownsModule,
      InputsModule
    ],
    exports: [StudentEditComponent]
})
export class StudentEditModule { }
