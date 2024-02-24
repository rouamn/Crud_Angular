import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/Model/Product';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  products: Product[] = [];

  product: Product = new Product;
  constructor(private service: ProductService, private route: Router,    private routes: ActivatedRoute) {}

    ngOnInit(): void {

      const id = this.routes.snapshot.paramMap.get('id');

      if (id) {
        this.service.getProductById(+id).subscribe(existingProduct => {
          this.product = existingProduct;
        });
      }
    }


    updateProduct() {
      if (this.product) {
        this.service.updateProduct(this.product.id, this.product).subscribe(
          () => {
            console.log('Product updated successfully');
            this.route.navigate([""])
            alert('Product updated successfully');
          },
          (error) => {
            console.error('Error updating product:', error);
          }
        );
      }
    }
}







