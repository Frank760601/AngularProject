import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentModel, SexModel, Stock } from '../model/student.model';
import { StudentCrudService } from '../service/StudentCRUD.service';
import { StudentabcService } from '../service/Studentabc.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { StudentEditComponent } from '../edit/student.edit.component';
import { StudentQueryComponent } from '../query/student.query.component';
import { StudentGridComponent } from '../grid/student.grid.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
    providers: [StudentabcService]
})
export class StudentComponent implements OnInit, DoCheck {
  display: string = null;
  title: string = null;
  show: number = 0;
  @ViewChild(StudentGridComponent) child: StudentGridComponent;
  @ViewChild(StudentQueryComponent) querychild: StudentQueryComponent;
  @ViewChild(StudentEditComponent) editchild: StudentEditComponent;
  togglePopUp: boolean = false;
  studentIdForDelete: number = null;
  student = new StudentModel();
  studentList: StudentModel[] = [];
  sexList: any[] = [];
  prodTypes : any[] =
    [{ "id": "1", "name": "Book" }, { "id": "2", "name": "Toy" }, { "id": "3", "name": "Music" }];
  isObjEmpty: boolean = true;
  tempquery = new StudentModel();
  public stock: Stock;
  isPositiveChange: boolean;
  TestTag: number;
    constructor(private crudService: StudentCrudService, public toastr: ToastrManager, private changeDetectorRef: ChangeDetectorRef, private abc: StudentabcService) { }

  ngDoCheck() {
    this.isPositiveChange = this.stock.price >= this.stock.previousPrice;
  }

    ngOnInit() {
        var test = this.abc.GetById(2);
    this.crudService.message = "test";
    this.TestTag = 0;
    this.stock = new Stock('Test Stock Company', 85, 80);
    this.display = "list";
    //this.show = 2;
    this.title = "Students Listing";
    this.GetAllSex();
    this.GetAllStudents();

    var ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"]
    };

    ourDog["PropertyD"] = 4;
    var aa = 1;
  }
  onListen(data: StudentModel): void {
    this.tempquery = data;
    this.changeDetectorRef.detectChanges();
    this.querychild.SetQuery(this.tempquery);
    this.crudService.GetByCondition(data).subscribe(res => {
      let result = <any[]>res;
      
      this.child.GetGridData(result);
      
    });
  }
  onGridListen(id: number): void {
      this.GetStudentById(id);
  }
  onDeleteListen(id: number): void {
    this.ConfirmDelete(id);
  }
  GetAllSex() {
    this.crudService.GetSex().subscribe(res => {
      let result = <any[]>res;
      this.sexList = result;
      this.editchild.SetSexList(result);
    });
  }

    GetAllStudents() {
      
    this.crudService.GetAll().subscribe(res => {
      let result = <any[]>res;
      this.child.GetGridData(result);
    });
  }

  padLeft(str: string, lenght: number) {
    if (str.length >= lenght)
      return str;
    else
      return this.padLeft("0" + str, lenght);
  }

  GetStudentById(id: number) {
    //this.show = id;
    this.crudService.GetById(id).subscribe(res => {
      let result = <StudentModel>res;
      if (result !== null) {
        this.display = "addNew";

        var formattedDate = new Date(result.enrolledDate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth();
        m += 1;  // JavaScript months are 0-11
        var y = formattedDate.getFullYear();

        result.strenrolledDate = y + "-" + this.padLeft(m.toString(), 2) + "-" + this.padLeft(d.toString(), 2);

        for (let i = 0; i < this.sexList.length; i++) {
          console.log(this.sexList[i].value)
          if (this.sexList[i].value == result.sex) {
            
            result.selectedsex = this.sexList[i];
          }
        }
        this.editchild.SetStudentById(result);
      } else {
        this.toastr.errorToastr('Encountered an error.', 'Oops!');
      }
    });
  }

  onTestListen(): void {
    this.mainTest();
  }
  mainTest() {
    this.TestTag += 2;
  }
  onEditListen(res: any):void {
    if (res.result) {
      this.display = "list";
      this.title = "Students Listing";
      this.GetStudents();
    }

    if (res.id > 0) {
      if (res.result) {
        this.toastr.successToastr('New Student Added.', 'Success!');
      } else
        this.toastr.errorToastr('Add Encountered an error.', 'Oops!');
    } else {
      if (res.result) {
        this.toastr.successToastr('New Student Updated.', 'Success!');
      } else
        this.toastr.errorToastr('Update Encountered an error.', 'Oops!');
    }
  }
  

  ConfirmDelete(id: number) {
    this.togglePopUp = true;
    this.studentIdForDelete = id;
  }

  DeleteStudent() {
    this.crudService.Delete(this.studentIdForDelete).subscribe(res => {
      this.togglePopUp = false;
      let result = <boolean>res;
      if (result) {
        this.GetStudents();
        this.toastr.successToastr('Student Information Deleted.', 'Success!');
      } else {
        this.toastr.errorToastr('Encountered an error.', 'Oops!');
      }
    });
  }

  CheckObjValue(model: StudentModel): boolean {
    for (let key of Object.keys(model)) {
      let Column = model[key];
      if (Column != null && Column != undefined && Column != "") {
        return false;
      }
    }
    return true;
  }

  GetStudents() {
    this.editchild.student = new StudentModel();
    let model = this.tempquery;
    if (!this.CheckObjValue(model)) {
      this.onListen(model);
    } else {
      this.GetAllStudents();
    }
  }

  myclick() {
    this.stock.price = 70;
  }
}
