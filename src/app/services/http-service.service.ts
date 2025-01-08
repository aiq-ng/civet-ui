import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }


  post(endpoint:string, data:any){
    return this.http.post(this.baseUrl + endpoint, data)
  }

  get(endpoint:string){
    return this.http.get(this.baseUrl + endpoint)
  }

  update(endpoint:string, data:any){
    return this.http.put(this.baseUrl + endpoint, data)
  }

  delete(endpoint:string){
    return this.http.delete(this.baseUrl + endpoint)
  }

  patch(endpoint:string){
    return this.http.patch(this.baseUrl + endpoint, null)
  }

}
