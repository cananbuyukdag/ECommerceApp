import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { CategoryModel } from './models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './services/category.service';
import { NgForm } from '@angular/forms';
import { SwalService } from 'src/app/common/services/swal.service';
import { CategoryPipe } from './pipes/category.pipe';
import { BlankComponent } from 'src/app/common/component/blank/blank.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule, CategoryPipe, BlankComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[] = [];
  updateCategory: CategoryModel = new CategoryModel();
  search: string = "";
  constructor(
    private _toastr: ToastrService, private _category:CategoryService, private swal: SwalService
  ){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this._category.getAll(res => this.categories = res);
  }

  add(form:NgForm){
    if(form.valid){
      this._category.add(form.controls["name"].value, res=>{
        this._toastr.success(res.message);
        let element = document.getElementById("addModalCloseBtn");
        element?.click();
        form.reset();
        this.getAll();
      });
    }
  }

  get(model: CategoryModel){
    this.updateCategory = {...model};
  }

  update(form:NgForm){
    if(form.valid){
      this._category.update(this.updateCategory, res =>{
        this._toastr.warning(res.message);
        this.getAll();
        let element = document.getElementById("updateModalCloseBtn");
        element?.click();
      })
    }
  }

  removeById(model: CategoryModel){
    this.swal.callSwal("Kategoriyi silmek istiyor musunuz?", "", "Sil", ()=>{
    this._category.removeById(model._id,res=>{
      this.getAll();
    })
    });
  }
}
