import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private socket!:WebSocket;
  private message: Subject<string> = new Subject<string>();

  constructor() {
    this.socket = new WebSocket('ws://41.73.6.101/:8070/ws/notifications/?');
    // this.socket = new WebSocket('ws://localhost:8070/ws/notifications/');

    console.log('service hit')
    this.socket.onmessage = (event)=>{
      console.log('notification received', event.data)
      const data = JSON.parse(event.data);
      this.message.next(data.message);
    }
  }


  getMessages(){
    return this.message.asObservable();
  }

}
