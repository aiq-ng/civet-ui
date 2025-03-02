import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchQuery = new BehaviorSubject <any>(null);
  searchQuery$ = this.searchQuery.asObservable();
  imageSearchResult = new BehaviorSubject<any>(null);
  imageSearchResult$ = this.imageSearchResult.asObservable();

  constructor(private api:HttpServiceService) { }

  setSearchQuery(query:any): void{
    this.searchQuery.next(query);
  }

  setImageSearchResult(result:any): void{
    this.imageSearchResult.next(result);
  }


  getSearchQuery(){
    console.log('search result get', this.searchQuery.getValue());
    return this.searchQuery.getValue();
  }

  getImageSearchResult(){
    return this.imageSearchResult.getValue();
  }

  searchLicensePlate(keyword:string): Observable<any>{
    return this.api.get(`license-plates/?plate_number=${keyword}`).pipe(map((res:any)=> res))
  }

  searchFacialRecognition(query:any): Observable<any>{
    return this.api.post('search/', query).pipe(map((res:any)=> res))
  }

  saveSearchHistory(query:any){
    this.api.post('search-history/', query).subscribe(
      res=>{
        console.log('search history saved', res);
      }, err=>{
        console.log('error saving search history', err);
      }
    )
  }

}
