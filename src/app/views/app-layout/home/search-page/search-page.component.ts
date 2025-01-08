import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;
    searchTime: number = 30;
    keepSearching:boolean = false;
    isWarning:boolean  = false;
    isSuccess:boolean  = false;
    isTerminateSearch:boolean = false;

    cameras = [
      {
        "date": "5 November",
        "data": [
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
          }
        ]
      },
      {
        "date": "16 December",
        "data": [
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
      }
    ]

    constructor(private router:Router){}
  ngOnInit() {
    this.items = [
        { label: 'Search results' },

    ];

    this.home = { icon: 'pi pi-home', routerLink: '/app/home' };
  }

  route(page:any){
    this.router.navigate([page]);
  }

  continueSearching(){
    this.keepSearching = true;
    // setTimeout(() => {
    //   this.keepSearching = false;
    // }, this.searchTime * 1000);
  }

  // stopSearching(){
  //   this.toggleWarnings('');
  // }

  toggleModal(modal:string){
    if(modal == 'stopSearch'){
      this.isWarning =!this.isWarning;
    }else if(modal == 'terminateSearch'){
      this.isWarning = false;
      this.isTerminateSearch =!this.isTerminateSearch;
    }else if(modal == 'success'){
      this.isTerminateSearch =false;
      this.isWarning = false;
      this.isSuccess = !this.isSuccess;

    }else {
      this.isTerminateSearch = false;
      this.isWarning =false;
    }
  }

  terminateSearch(){
  // terminalte search logic
  this.keepSearching = false;
  this.toggleModal('success')
  }


}
