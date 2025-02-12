import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchQuery = new BehaviorSubject <any>('');
  searchQuery$ = this.searchQuery.asObservable();

  constructor(private api:HttpServiceService) { }

  setSearchQuery(query:any): void{
    this.searchQuery.next(query);
  }


  getSearchQuery(){
    return this.searchQuery.getValue();
  }

  searchLicensePlate(keyword:string): Observable<any>{
    return this.api.get(`license-plates/?q=${keyword}`).pipe(map((res:any)=> res))
  }

  searchFacialRecognition(image:any): Observable<any>{
    const formData = new FormData()
    formData.append('image', image);
    return this.api.post('', formData).pipe(map((res:any)=> res))
  }

}
