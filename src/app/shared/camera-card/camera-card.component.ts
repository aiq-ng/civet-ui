import { Component } from '@angular/core';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrl: './camera-card.component.scss'
})
export class CameraCardComponent {

  cameras: any;

    responsiveOptions: any[] | undefined;

    // constructor(private productService: ProductService) {}

    ngOnInit() {
       this.cameras = [
        {
          "cameraName": "Camera 1",
          "location": "Main Street",
          "uptime": "12:34:56",
          "status": "Online"
        },
        {
          "cameraName": "Camera 2",
          "location": "Park Avenue",
          "uptime": "02:15:32",
          "status": "Offline"
        },
        {
          "cameraName": "Camera 3",
          "location": "Highland Road",
          "uptime": "48:12:08",
          "status": "Online"
        },
        {
          "cameraName": "Camera 4",
          "location": "Market Square",
          "uptime": "03:45:23",
          "status": "Online"
        },
        {
          "cameraName": "Camera 5",
          "location": "Broadway",
          "uptime": "27:23:19",
          "status": "Offline"
        },
        {
          "cameraName": "Camera 6",
          "location": "Elm Street",
          "uptime": "10:12:45",
          "status": "Online"
        },
        {
          "cameraName": "Camera 7",
          "location": "Sunset Boulevard",
          "uptime": "05:01:16",
          "status": "Online"
        },
        {
          "cameraName": "Camera 8",
          "location": "Iwo Road",
          "uptime": "24:56:23",
          "status": "Online"
        }
      ]


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
