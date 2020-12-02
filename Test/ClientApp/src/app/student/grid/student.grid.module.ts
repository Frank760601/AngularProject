import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StudentGridComponent } from './student.grid.component';
@NgModule({
    declarations: [StudentGridComponent],
  imports: [
      RouterModule,
      FormsModule,
      BrowserModule,
      HttpClientModule,
      HttpModule,
      GridModule
    ],
    exports: [StudentGridComponent]
})
export class StudentGridModule { }
