import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    HttpClientModule
  ]
})
export class SharedModule { }
