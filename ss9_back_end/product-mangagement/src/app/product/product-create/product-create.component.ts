import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]\\w*(\\s[A-Z]\\w*)*$')]),
    price: new FormControl('', [Validators.required, this.regexPrice]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
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
        Swal.fire('Thêm mới thành công');
        this.productForm.reset();
        this.route.navigateByUrl('');
      });
      console.log(product);
    });
  }

  regexPrice(control: AbstractControl): ValidationErrors | null {
    const price = control.value;
    if (price <= 0) {
      return {priceFalse: true};
    }
    return null;
  }
}
