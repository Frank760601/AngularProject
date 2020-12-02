import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StudentQueryComponent } from './student.query.component';
@NgModule({
    declarations: [StudentQueryComponent],
  imports: [
      RouterModule,
      FormsModule,
      BrowserModule,
      HttpClientModule,
      HttpModule
    ],
    exports: [StudentQueryComponent]
})
export class StudentQueryModule { }
