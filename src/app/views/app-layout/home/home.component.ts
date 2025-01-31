import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StorageService } from '../../../services/storage.service';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items:any;
  tableMenu:boolean = false;
  loading:boolean = true;
  connectedCameras?:any = [];

  constructor(private router:Router, private storage:StorageService, private api:HttpServiceService){}

  searchHistory?:any;

  ngOnInit(){

    // this.connectedCameras = [
    //   {
    //     "cameraName": "Camera 1",
    //     "location": "Main Street",
    //     "uptime": "12:34:56",
    //     "status": "Online"
    //   },
    //   {
    //     "cameraName": "Camera 2",
    //     "location": "Park Avenue",
    //     "uptime": "02:15:32",
    //     "status": "Offline"
    //   },
    //   {
    //     "cameraName": "Camera 3",
    //     "location": "Highland Road",
    //     "uptime": "48:12:08",
    //     "status": "Online"
    //   },
    //   {
    //     "cameraName": "Camera 4",
    //     "location": "Market Square",
    //     "uptime": "03:45:23",
    //     "status": "Online"
    //   },
    //   {
    //     "cameraName": "Camera 5",
    //     "location": "Broadway",
    //     "uptime": "27:23:19",
    //     "status": "Offline"
    //   },
    //   {
    //     "cameraName": "Camera 6",
    //     "location": "Elm Street",
    //     "uptime": "10:12:45",
    //     "status": "Online"
    //   },
    //   {
    //     "cameraName": "Camera 7",
    //     "location": "Sunset Boulevard",
    //     "uptime": "05:01:16",
    //     "status": "Online"
    //   },
    //   {
    //     "cameraName": "Camera 8",
    //     "location": "Iwo Road",
    //     "uptime": "24:56:23",
    //     "status": "Online"
    //   }
    // ]


    this.searchHistory = [

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

  this.getConnectedCameras();
  this.getSearchHistory();


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

  getConnectedCameras(){
    this.api.get('cameras/').subscribe(
      res=>{
        let response:any = res;
        this.connectedCameras = response.results;
      }, err=>{
        console.log(err);
      }
    )
  }

  getSearchHistory(){
    this.loading = true;
    console.log('loading is', this.loading)
    this.api.get('search-history/').subscribe(
      res=>{
        let response:any = res;
        this.searchHistory = response.results;
        console.log('connected cameras', this.searchHistory);
        this.loading = false;
        console.log('loading is', this.loading)

        this.loading = false;
      }, err=>{
        console.log(err);
        this.loading = false;
        console.log('loading is', this.loading)

      }
    )
  }

  viewAlert(){

  }

}
