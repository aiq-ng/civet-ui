import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private api:HttpServiceService) {}

  getCameras(): Observable<any>{
    return this.api.get('cameras/').pipe(map((res:any )=> res.results))
  }

}
