import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentModel, SexModel, Stock } from '../model/student.model';
import { StudentCrudService } from '../service/StudentCRUD.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-edit',
  templateUrl: './student.edit.html',
  providers: [StudentCrudService]
})
export class StudentEditComponent implements OnInit {
  student = new StudentModel();
  sexList: any[] = [];
  model: any = { result: true, id: 0 };
  @Output() onEditVoted: EventEmitter<any> = new EventEmitter();
  @Output() onTestVoted: EventEmitter<any> = new EventEmitter();
  @Input() myTag: number;
  
  constructor(private crudService: StudentCrudService) { }
  ngOnInit() {
    this.crudService.message = "TESTTEST";
  }
  SetStudentById(Student: StudentModel) {
    this.student = Student;
  }
  SetSexList(sexList: any[]) {
    this.sexList = sexList;
  }

  public selectionChange(value: any): void {
    console.log('selectionChange', value);
  }
  myTest() {
    let result = this.myTag;
    this.onTestVoted.emit();
    var test2 = 1;
  }
  AddStudent(form: NgForm) {
    let result = <StudentModel>form.value;
    result.sex = result.selectedsex.value;
    if (result.id > 0) {
      this.UpdateStudent(result, form);

    } else {
      result.id = 0;
      this.crudService.Create(result).subscribe(res => {
        let response = <boolean>res;
        if (response) {
          form.reset();
        }
        this.model.result = response;
        this.model.id = result.id;
        this.onEditVoted.emit(this.model);
      });
    }
  }

  UpdateStudent(student: StudentModel, form: NgForm) {
    this.crudService.Update(student).subscribe(res => {
      let response = <boolean>res;
      if (response) {
        form.reset();
      }
      this.model.result = response;
      this.model.id = student.id;
      this.onEditVoted.emit(this.model);
    });
  }

  SetFormReset(){}
}
