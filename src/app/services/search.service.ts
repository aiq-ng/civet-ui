import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchQuery = new BehaviorSubject <any>('');
  searchQuery$ = this.searchQuery.asObservable();

  constructor() { }

  setSearchQuery(query:any): void{
    this.searchQuery.next(query);
  }


  getSearchQuery(){
    return this.searchQuery.getValue();
  }

}
