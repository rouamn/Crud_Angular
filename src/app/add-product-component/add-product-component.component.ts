
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/Model/Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent {
  productData: Product = new Product();

  fg: FormGroup;

  constructor(private fb: FormBuilder , private service :ProductService) {
    this.fg = this.fb.group({
      name: new FormControl(this.productData.name, Validators.required),
      price: new FormControl(this.productData.price, Validators.pattern('^[0-9]*$')),
      description: new FormControl(this.productData.description, Validators.minLength(10))

    });


  }

  get name() {
    return this.fg.get('name');
  }
  get price(){
    return this.fg.get('price');

  }
  get description(){
    return this.fg.get('description');

  }

  onSubmit(formData: any) {
    this.service.addProduct(formData).subscribe(() => {

      console.log('Product added successfully');
      alert('Product added successfully');
    }, (error) => {

      console.error('Error adding product:', error);
    });
  }
  

}
