import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-connect-camera',
  templateUrl: './connect-camera.component.html',
  styleUrl: './connect-camera.component.scss'
})
export class ConnectCameraComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  loading: boolean = false;

  visible: boolean = false;

  constructor(private router:Router){}

    ngOnInit() {
        this.items = [
            { label: 'Connect camera' },

        ];

        this.home = { icon: 'pi pi-home', routerLink: '/app/home' };
    }

    showDialog() {
      this.visible = true;
  }

  route(page:string){
    this.router.navigate([page]);
  }

}
