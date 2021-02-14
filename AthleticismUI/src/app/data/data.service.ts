import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  products: Product[] = [
    {
      id: 1,
      title: 'Dress Name',
      description: 'Dress Information',
      picture: '/assets/p1-1.jpeg',
      price: 170,
      sale: 145,
      photos: [
      ],
    }
  ];
}
