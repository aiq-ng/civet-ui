import { CameraService } from './../../../services/camera.service';
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
  cameraLoading:boolean = true;
  searchLoading:boolean = true;
  connectedCameras?:any = [];

  constructor(private router:Router,
              private storage:StorageService,
              private api:HttpServiceService,
              private cameraService:CameraService){}

  searchHistory?:any;

  ngOnInit(){



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
    this.cameraService.getCameras().subscribe(
      res=>{
        this.connectedCameras = res;
        console.log('connected cameras', this.connectedCameras);
        this.cameraLoading=false;
      }, err=>{
        console.log(err);
      }
    )
  }

  getSearchHistory(){
    this.searchLoading = true;
    console.log('loading is', this.searchLoading)
    this.api.get('search-history/').subscribe(
      res=>{
        let response:any = res;
        this.searchHistory = response.results;
        console.log('Search history', this.searchHistory);
        this.searchLoading = false;

        this.searchLoading = false;
      }, err=>{
        console.log(err);
        this.searchLoading = false;

      }
    )
  }

  viewAlert(){

  }

}
