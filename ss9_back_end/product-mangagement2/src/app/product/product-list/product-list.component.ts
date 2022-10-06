import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;
  nameDelete: string;
  keyword: string;
  categories: Category[] = [];
  categorySearch: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
    this.getAllCategory();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(categoires => {
      this.categories = categoires;
    });
  }

  getIdNameDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  delete() {
    this.productService.deleteProduct(this.idDelete).subscribe(next => {
      this.getAll();
    });


  }

  //
  // search() {
  //   this.productService.getAll().subscribe(products => {
  //     this.products = products;
  //     if (this.keyword == null) {
  //       return this.products;
  //     } else {
  //       this.products = this.products.filter(product => {
  //         return (product.name.toLowerCase().includes(this.keyword.toLowerCase())
  //           || product.category.nameCategory.includes(this.keyword));
  //       });
  //     }
  //   });
  // }
  search() {
    if (this.keyword == null) {
      return this.products;
    } else {
      this.products = this.products.filter(product => {
        return (product.name.toLowerCase().includes(this.keyword.toLowerCase())
          // || product.category.nameCategory.toLowerCase().includes(this.keyword.toLowerCase())
          || product.price === +this.keyword);
      });
    }
    this.keyword = '';
  }


  back() {
    this.getAll();
  }

  getIdSearch(event) {
    this.categorySearch = event.target.value;
    this.products = this.products.filter(product => {
      return (product.category.nameCategory.toLowerCase().includes(this.categorySearch.toLowerCase()));
    });
  }

  nextPage() {

  }

  backPage() {

  }
}
