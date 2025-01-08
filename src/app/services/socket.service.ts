import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  
  private socket$: WebSocketSubject<string>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://127.0.0.1:8000/alerts/websocket');
  }

  sendMessage(message:string) {
    this.socket$.next(message);
  }

  getMessages() {
    return this.socket$.asObservable();
  }

}
