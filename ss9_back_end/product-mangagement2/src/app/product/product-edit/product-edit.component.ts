import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productEdit: Product;
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAllCategory();
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]\\w*(\\s[A-Z]\\w*)*$')]),
      price: new FormControl('', [Validators.required, this.regexPrice]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
    this.productService.findById(this.id).subscribe(next => {
      this.productEdit = next;
      this.productForm.patchValue(this.productEdit);
      this.productForm.patchValue({category: this.productEdit.category.id});
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.findByIdCategory(this.productForm.value.category).subscribe(next => {
      product.category = next;

    }, error => {
    }, () => {
      this.productService.updateProduct(id, product).subscribe(() => {
        alert('Cập nhật thành công');
        this.route.navigateByUrl('');
      });
    });
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(categoires => {
      this.categories = categoires;
    });
  }

  regexPrice(control: AbstractControl): ValidationErrors | null {
    const price = control.value;
    if (price <= 0) {
      return {'priceFalse': true};
    }
    return null;
  }
}
