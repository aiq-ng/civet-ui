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

  getSingleCamera(id:any): Observable<any>{
    return this.api.get(`cameras/${id}`).pipe(map((res:any )=> res))
  }

  startRecording(cameraId:any): Observable<any>{
    return this.api.post(`start-recording/${cameraId}/`, {}).pipe(map((res:any )=> res))
  }

  stopRecording(cameraId:any): Observable<any>{
    return this.api.post(`stop-recording/${cameraId}/`, {}).pipe(map((res:any )=> res))
  }

  getRecording(cameraId:any): Observable<any>{
    return this.api.get(`recordings/${cameraId}/`).pipe(map((res:any)=> res))
  }

}
