import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StudentEditModule } from '../edit/student.edit.module';
import { StudentQueryModule } from '../query/student.query.module';
import { StudentGridModule } from '../grid/student.grid.module';
import { StudentComponent } from './student.component';
import { StudentCrudService } from '../service/StudentCRUD.service';
import { HeroesComponent } from '../../hero/heroes/heroes.component';
@NgModule({
    declarations: [StudentComponent],
  imports: [
      StudentEditModule,
      StudentQueryModule,
      StudentGridModule,
      FormsModule,
      BrowserModule,
      HttpClientModule,
      HttpModule
      ,
      RouterModule.forRoot([
          { path: 'heroes', component: HeroesComponent }
      ]),
    ],
    providers: [StudentCrudService]
})
export class StudentdModule { }
