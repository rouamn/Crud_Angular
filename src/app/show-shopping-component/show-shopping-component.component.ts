import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/Model/Product';
import { Card } from 'src/Model/Card';

@Component({
  selector: 'app-show-shopping-component',
  templateUrl: './show-shopping-component.component.html',
  styleUrls: ['./show-shopping-component.component.css']
})
export class ShowShoppingComponentComponent {

  constructor(private service :ProductService) {}
  products: Product[] = [];
  cards: Card[] = [];
    ngOnInit() {
      this.getCard();
    }
    getCard() {
      this.service.getCart().subscribe(
        (response: Object) => {
          this.cards = response as Card[];
          console.log('Cards retrieved successfully');
        },
        (error) => {
          console.error('Error retrieving cards:', error);
        }
      );

  }}
