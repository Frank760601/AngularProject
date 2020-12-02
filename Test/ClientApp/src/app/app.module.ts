import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StudentdModule } from './student/student/student.module';
import { StudentComponent } from './student/student/student.component';
import { HeroesModule } from './hero/heroes/heroes.module';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    StudentdModule,
    HeroesModule,
    ToastrModule.forRoot(),
      RouterModule.forRoot([
          { path: '', component: HeroesComponent, pathMatch: 'full' },
          { path: '', component: StudentComponent, pathMatch: 'full' }
        
      ]),
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
