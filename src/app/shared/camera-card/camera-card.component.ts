import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrl: './camera-card.component.scss'
})
export class CameraCardComponent {

  @Input() cameras: any;

    responsiveOptions: any[] | undefined;

    // constructor(private productService: ProductService) {}

    ngOnInit() {

        console.log('connected cameras', this.cameras)

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
    }

    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'INSTOCK':
    //             return 'success';
    //         case 'LOWSTOCK':
    //             return 'warning';
    //         case 'OUTOFSTOCK':
    //             return 'danger';
    //     }
    // }

}
