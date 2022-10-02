import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(categoires => {
      this.categories = categoires;
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.findByIdCategory(this.productForm.value.category).subscribe(n => {
      product.category = n;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Tạo thành công');
        this.productForm.reset();
        this.route.navigateByUrl("")
      });
      console.log(product);
    })
  }
}
