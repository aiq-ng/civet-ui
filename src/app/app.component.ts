import { Component } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'civet-ui';
  value!: string;
  products: any = [];

  responsiveOptions: any[] | undefined;


  cities!: City[];

  selectedCities!: City[];
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
];


getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warning';
      case 'OUTOFSTOCK':
          return 'danger';
      default:
        return 'warning'
  }
}

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];

      this.products = [
        {
            "id": "1000",
            "code": "f230fh0g3",
            "name": "Bamboo Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 65,
            "category": "Accessories",
            "quantity": 24,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {
            "id": "1001",
            "code": "nvklal433",
            "name": "Black Watch",
            "description": "Stylish black watch",
            "image": "black-watch.jpg",
            "price": 72,
            "category": "Accessories",
            "quantity": 18,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1002",
            "code": "zz21cz3c1",
            "name": "Blue T-Shirt",
            "description": "Comfortable cotton T-shirt",
            "image": "blue-t-shirt.jpg",
            "price": 25,
            "category": "Clothing",
            "quantity": 40,
            "inventoryStatus": "LOWSTOCK",
            "rating": 4
        },
        {
            "id": "1003",
            "code": "244wgerg2",
            "name": "Gaming Headset",
            "description": "High-quality gaming headset",
            "image": "gaming-headset.jpg",
            "price": 90,
            "category": "Electronics",
            "quantity": 15,
            "inventoryStatus": "OUTOFSTOCK",
            "rating": 5
        },
        {
            "id": "1004",
            "code": "h456wer53",
            "name": "Leather Wallet",
            "description": "Genuine leather wallet",
            "image": "leather-wallet.jpg",
            "price": 45,
            "category": "Accessories",
            "quantity": 32,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "id": "1005",
            "code": "av2231fw4",
            "name": "Smartphone",
            "description": "Latest model smartphone",
            "image": "smartphone.jpg",
            "price": 599,
            "category": "Electronics",
            "quantity": 12,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        }
    ]

    }




}
