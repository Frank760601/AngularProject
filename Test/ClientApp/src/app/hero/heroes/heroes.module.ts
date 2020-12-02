import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
@NgModule({
    declarations: [HeroesComponent],
  imports: [
      FormsModule,
      BrowserModule,
      HttpClientModule,
      HttpModule,
      HeroDetailModule
  ]
})
export class HeroesModule { }
