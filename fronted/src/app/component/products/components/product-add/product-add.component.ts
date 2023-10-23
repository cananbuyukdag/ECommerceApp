import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BlankComponent } from "../../../../common/component/blank/blank.component";
import { CategoryModel } from 'src/app/component/categories/models/category.model';
import { CategoryService } from 'src/app/component/categories/services/category.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-product-add',
    standalone: true,
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss'],
    imports: [SharedModule, BlankComponent]
})
export class ProductAddComponent implements OnInit{
categories: CategoryModel[] = [];
images: File[] = [];
imageUrls: any[] = [];

constructor(
  private _category: CategoryService
){}
  ngOnInit(): void {
   this.getCategories();
  }

  getCategories(){
    this._category.getAll(res=> this.categories = res);
  }

getImages(event:any){
  const file: File[] = Array.from(event.target.files);
  this.images.push(...file);

  for(let i = 0; i < event.target.files.lenght; i++){
    const element = event.target.files[i];
    const reader = new FileReader();
    reader.readAsDataURL(element);

    reader.onload = ()=> {
      const imageUrl = reader.result as string;
      this.addImage(imageUrl, file);
    }
  }
}

addImage(imageUrl: string, file: any){
  this.imageUrls.push(
    {imageUrl: imageUrl, name: file.name, size: file.size}
  );
}

add(form: NgForm){

}

removeImage(name: string, size: number, index: number){
  this.imageUrls.splice(index, 1);
  let i = this.images.findIndex(p=>p.name == name && p.size == size);
  this.images.splice(i,1);
}
}
