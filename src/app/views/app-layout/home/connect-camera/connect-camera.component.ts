import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { HttpServiceService } from '../../../../services/http-service.service';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-connect-camera',
  templateUrl: './connect-camera.component.html',
  styleUrl: './connect-camera.component.scss'
})
export class ConnectCameraComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  loading: boolean = false;
  cameraForm:any;
  visible: boolean = false;

  constructor(private router:Router, private fb:FormBuilder, private api:HttpServiceService, private storage:StorageService){}

    ngOnInit() {
        this.items = [
            { label: 'Connect camera' },
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/app/home' };

        this.cameraForm = this.fb.group({
          camera_name: ['', Validators.required],
          imei: ['', Validators.required],
          password: ['', Validators.required],
          location: ['Main street'],
          status: ['down'],
          uptime: ['online'],
          rtmp_url: ['', Validators.required]

        });
    }


    saveCamera(){
      this.loading = true;
      this.api.post('cameras/', this.cameraForm.value).subscribe(
        res=>{
          console.log(res);
          this.route('app/home');
          this.loading = false;
        }, err=>{
          console.log(err);
          this.loading = false;
        }
      )

    }

    showDialog() {
      this.visible = true;
  }

  route(page:string){
    this.router.navigate([page]);
  }

}
