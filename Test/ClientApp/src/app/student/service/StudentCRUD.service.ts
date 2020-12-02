import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StudentModel } from '../model/student.model';

@Injectable()
export class StudentCrudService {

  baseurl = environment.baseURL;
  constructor(private http: HttpClient) { }

  public message: string;

  Create(student: StudentModel) {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.post(this.baseurl + 'api/student/create-student', student, { headers: reqHeader });
  }

  GetById(id: number) {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.get(this.baseurl + 'api/student/get-student-byId?id=' + id, { headers: reqHeader });
  }

  GetSex() {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.get(this.baseurl + 'api/student/get-sex', { headers: reqHeader });
  }

  Update(student: StudentModel) {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.post(this.baseurl + 'api/student/update-student', student, { headers: reqHeader });
  }

  Delete(id: number) {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.get(this.baseurl + 'api/student/delete-student?id=' + id, { headers: reqHeader });
  }

  GetAll() {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.get(this.baseurl + 'api/student/get-all-students', { headers: reqHeader });
  }
  GetByCondition(studentquery: StudentModel) {
    let reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type', 'application/json');
    return this.http.post(this.baseurl + 'api/student/get-student-byCondition', studentquery, { headers: reqHeader });
  }
}
