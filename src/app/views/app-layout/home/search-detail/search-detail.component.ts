import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrl: './search-detail.component.scss'
})
export class SearchDetailComponent {
  isSuccess:boolean = false;
  isWarning:boolean = false;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  loading: boolean = false;
  camera = {
    "cameraName": "Camera 3",
    "location": "Highland Road",
    "uptime": "10:12",
    "date": "22nd October 2024",
    "status": "Online"
  }

  constructor(private router:Router){}

  ngOnInit() {
    this.items = [
        { label: 'Search results' },
        { label: 'Detail' },

    ];

    this.home = { icon: 'pi pi-home', routerLink: '/app/home' };
  }

  goBack(){
    history.back();
  }

  route(page:string){
    this.isSuccess = false;
    this.router.navigate([page])
  }

  addToDB(){
    this.isSuccess = true;
  }

  exitSuccessModal(){
    this.isSuccess = false;
  }

}
