import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;
    forwardNotification:boolean = false;
    notifications?:any = []
    mainData?:any;
    loading: boolean = false;


    constructor(private notificationService: NotificationService){}


    ngOnInit(){
      this.items = [
        { label: 'Search results' }
      ];

      this.notificationService.getMessages().subscribe(
        res=>{
          this.notifications.push(res);
          this.mainData = res;
          console.log('notifications', this.notifications);
          this.loading = false;
        }
      )

    }

}
