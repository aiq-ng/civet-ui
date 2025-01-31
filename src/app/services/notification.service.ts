import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private api:HttpServiceService) { }


  getNotifications(): Observable<any>{
      return this.api.get('notifications/').pipe(map((res:any )=> res))
    }

}
