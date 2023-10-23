import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationResultModel } from 'src/app/common/models/pagination-result.model';
import { ProductModel } from '../../models/product.model';
import { RequestModel } from 'src/app/common/models/request.model';
import { ProductService } from '../../services/product.service';
import { SwalService } from 'src/app/common/services/swal.service';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BlankComponent } from "../../../../common/component/blank/blank.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    imports: [SharedModule, BlankComponent]
})
export class ProductsComponent implements OnInit{

  result: PaginationResultModel<ProductModel[]> = new PaginationResultModel<ProductModel[]>();
  request: RequestModel = new RequestModel();
  pageNumbers: number[] = [];
  product: ProductModel = new ProductModel();

  constructor(
    private _product:ProductService,
    private _swal: SwalService,
    private _toastr: ToastrService
  ){}

ngOnInit(): void {
  this.getAll();
}

getAll(pageNumber = 1){
  this.request.pageNumber = pageNumber;
  this._product.getAll(this.request, res => {
    this.result = res;
    this.setPageNumbers();
  })
}

setPageNumbers(){
  const startPage = Math.max(1, this.result.pageNumber - 2);
  const endPage = Math.min(this.result.totalPageCount, this.result.pageNumber + 2);
  this.pageNumbers = [];
  for(let i = startPage; i <= endPage; i++){
    this.pageNumbers.push(i);
  }
}

search(){
  if(this.request.search.length >= 3){
    this.getAll(1);
  }
}
}
