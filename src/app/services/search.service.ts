import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchQuery = new BehaviorSubject <any>(null);
  searchQuery$ = this.searchQuery.asObservable();

  constructor(private api:HttpServiceService) { }

  setSearchQuery(query:any): void{
    console.log('query from service', query)
    this.searchQuery.next(query);
  }


  getSearchQuery(){
    return this.searchQuery.getValue();
  }

  searchLicensePlate(keyword:string): Observable<any>{
    return this.api.get(`license-plates/?q=${keyword}`).pipe(map((res:any)=> res))
  }

  searchFacialRecognition(query:any): Observable<any>{
    const formData = new FormData()
    return this.api.post('search/', formData).pipe(map((res:any)=> res))
  }

  saveSearchHistory(formData:any){
    this.api.post('search-history/', formData).subscribe(
      res=>{
        console.log('search history saved', res);
      }, err=>{
        console.log('error saving search history', err);
      }
    )
  }

}
