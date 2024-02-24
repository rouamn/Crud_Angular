import { Component } from '@angular/core';
import { Product } from 'src/Model/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
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

}
