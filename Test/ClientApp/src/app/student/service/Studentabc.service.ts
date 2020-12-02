import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StudentModel } from '../model/student.model';

export class StudentabcService {
    baseurl = environment.baseURL;
    //constructor(private http: HttpClient) { }

    public message: string;
    GetById(id: number) {
        return id + 1;
    }
}
