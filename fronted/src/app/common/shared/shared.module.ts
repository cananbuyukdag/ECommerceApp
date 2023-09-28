import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../component/table/table.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableComponent,
    ValidDirective,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableComponent,
    RouterModule,
    ValidDirective,
    HttpClientModule
  ]
})
export class SharedModule { }
