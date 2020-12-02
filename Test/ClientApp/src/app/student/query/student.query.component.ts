import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentModel, SexModel, Stock } from '../model/student.model';
import { StudentCrudService } from '../service/StudentCRUD.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-query',
  templateUrl: './student.query.html'

})
export class StudentQueryComponent {
  query = new StudentModel();
  @Output() onVoted: EventEmitter<any> = new EventEmitter();

  public SetQuery(result: StudentModel) {
    this.query = result;
  }

  QueryStudent(form: NgForm) {
    this.query = new StudentModel();
    this.query = <StudentModel>form.value;
    this.onVoted.emit(this.query);
  }
}
