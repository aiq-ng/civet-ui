import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items:any;
  tableMenu:boolean = false;
  loading:boolean = true;

  constructor(private router:Router){}


  searchHistory:any;

  ngOnInit(){
    this.searchHistory = [
      {
          "searchKeyword": "CW 485 A**",
          "objectType": "Animal",
          "cameraName": "Camera 8",
          "image": "",
          "cameraLocation": "Iwo road"
      },
      {
          "searchKeyword": "CW 485 A**",
          "objectType": "License plate",
          "cameraName": "Camera 2",
          "image": "",
          "cameraLocation": "Iwo road"
      },
      {
          "searchKeyword": "BW 485 A**",
          "objectType": "License plate",
          "cameraName": "Cam",
          "image": "",
          "cameraLocation": "Mokola"
      },
      {
          "searchKeyword": "",
          "objectType": "Facial recognition",
          "cameraName": "Private Cam",
          "image": "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "cameraLocation": "Molete"
      },
      {
          "searchKeyword": "DW 455 A**",
          "objectType": "License plate",
          "cameraName": "CCTV 2",
          "image": "",
          "cameraLocation": "Minister of Works"
      }
  ]

  this.items = [
            { label: 'New', icon: 'pi pi-plus' },
            { label: 'Search', icon: 'pi pi-search' }
        ];
  }


  route(page:string){
    this.router.navigate([page]);
  }

  toggleTableMenu(){
    this.tableMenu =!this.tableMenu;
  }

  viewAlert(){

  }

}
