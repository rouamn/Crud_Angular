import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/Model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  products: Product[] = [];
  constructor(private service :ProductService, private route: Router) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.service.getAllProduct().subscribe(
      (response: Object) => {
        this.products = response as Product[];
        console.log('Products retrieved successfully');
      },
      (error) => {
        console.error('Error retrieving products:', error);
      }
    );
  }
  addtocard(data: Product) {
    this.service.addToCart(data).subscribe(
      () => {
        console.log('Product added to cart successfully');
      },
      (error) => {
        if (error.status === 500) {
          alert('Product already exists in the cart');
        } else {
          console.error('Error adding product to cart:', error);
        }
      }
    );
  }
    deleteProduct(id: number) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.service.deleteProduct(id).subscribe(
          () => {
            console.log('Product deleted successfully');
            this.getProducts();
            alert('Product deleted successfully');
          },
          (error) => {
            console.error('Error deleting product:', error);
          }
        );
      }

    }
  navigatetoUpdate(id: number) {
    this.route.navigate(['/update/', id]).then(() => {


    });
  }
  navigatetodetails(id: number) {
    this.route.navigate(['/details/', id]).then(() => {


    });
  }



  }
