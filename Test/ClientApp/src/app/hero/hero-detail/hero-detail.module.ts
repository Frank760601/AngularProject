import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
@NgModule({
    declarations: [HeroDetailComponent],
  imports: [
      FormsModule,
      BrowserModule,
      HttpClientModule,
      HttpModule
    ],
    exports: [HeroDetailComponent]
})
export class HeroDetailModule { }
