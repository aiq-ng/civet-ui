import { keyframes } from '@angular/animations';
import { SearchService } from './../../../../services/search.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { HttpServiceService } from '../../../../services/http-service.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;
    searchTime: number = 5;
    keepSearching:boolean = false;
    searchLoading:boolean = false;
    isWarning:boolean  = false;
    isSuccess:boolean  = false;
    isTerminateSearch:boolean = false;
    searchQuery: any = ''; // Holds the search query
    searchResults: any[] = []; // Holds the search results
    imageSearchResults:any;
    searchInterval: any; // Holds the interval ID
    searchTimeout: any; // Holds the timeout ID
    searchKeyword:any;
    products:any;



    constructor(
                  private router:Router,
                  private activatedRoute: ActivatedRoute,
                  private searchService:SearchService,
                  private api: HttpServiceService
                ){}

  ngOnInit() {
    console.log('welcome to search page')
    this.activatedRoute.queryParams.subscribe( params => {
      console.log('activated params;', params['q'])
      this.searchKeyword = params['q'] ;
      console.log('search keyword', this.searchKeyword)
    })


    this.items = [
        { label: 'Search results' },

    ];

    this.searchService.searchQuery$.subscribe(
      query => {
        this.searchQuery = query;
        console.log('search query', this.searchQuery)
        this.performSearch(this.searchKeyword, this.searchQuery)
        // this.faceSearch(this.searchQuery)

      }
    )

    this.home = { icon: 'pi pi-home', routerLink: '/app/home' };
  }


  increaseSearchTime(){
    if(this.searchTime < 120){
      this.searchTime += 10;
    }else{
      this.searchTime += 5;
    }
  }

  reduceSearchTime(){
    if(this.searchTime > 10){
      this.searchTime -= 10;
    } else{
      this.searchTime -= 5;
    }
  }

  route(page:any){
    this.router.navigate([page]);
  }


  // Start the search process
  continueSearching(): void {
    this.keepSearching = true;
    if (!this.searchQuery) {
      alert('Please enter a search query.');
      this.keepSearching = false;
      return;
    }

    // Clear previous results
    this.searchResults = [];

    // Start searching every 5 seconds
    this.searchInterval = setInterval(() => {
      this.performImageSearch();
    }, 5000); // 5000ms = 5 seconds

    // Stop searching after 20 minutes (1200000ms)
    this.searchTimeout = setTimeout(() => {
      this.stopSearch();
      alert(`Search completed after ${this.searchTime * 60 * 1000} minutes`);
    }, this.searchTime * 60 * 1000); // 1200000ms = 20 minutes
  }

  faceSearch(query:FormData){
    this.searchLoading = true;
    this.api.post('search/', query).subscribe(
      res=>{
        let response:any = res
        this.imageSearchResults = response.matches
        console.log('search results', this.imageSearchResults)
        this.searchLoading = false;
      }, err=>{
        console.log(err)
      }
    )
  }

  performSearch(searchKeywork:string, imageQuery:any){
    if(searchKeywork){
      console.log('searching text')
      this.performTextSearch(searchKeywork)

    }else{
      console.log('searching image')
      this.faceSearch(imageQuery)
    }
  }

  // perform text search
  performTextSearch(keyword:string): void {
    console.log('performing text search')
    if(keyword){
      this.searchService.searchLicensePlate(keyword).subscribe(
        res => {
          this.searchResults = res;
          this.imageSearchResults = []
          console.log('search results', this.searchResults);
        }, err=>{
          console.log(err);
          this.searchResults = [];
          this.imageSearchResults = [];
        }
      )
    }else {
    }
  }

  // Perform image search
  performImageSearch(): void {
    this.searchService.saveSearchHistory(this.searchQuery)
    console.log('verifying search query', this.searchQuery)
    this.searchService.searchFacialRecognition(this.searchQuery).subscribe(
      res => {
        this.imageSearchResults = res;
        this.searchResults = [];
        console.log('search results', this.searchResults);

        const activity = `Result for "${this.searchQuery}" at ${new Date().toLocaleTimeString()}`;
        this.searchResults.push(activity);

        console.log('Searching...', activity);
      }, err=>{
        console.log(err);
        this.searchResults = [];
      }
    )

  }

  // Stop the search process

  stopSearch(): void {
    if (this.searchInterval) {
      clearInterval(this.searchInterval);
      this.searchInterval = null;
    }

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
    this.keepSearching = false; // Important: Stop the search loop
    console.log('Search stopped.');
  }

  // Cleanup when the component is destroyed
  ngOnDestroy(): void {
    this.stopSearch(); // Ensure intervals and timeouts are cleared
  }

  toggleModal(modal:string){
    if(modal == 'stopSearch'){
      this.isWarning =!this.isWarning;
    }else if(modal == 'terminateSearch'){
      this.isWarning = false;
      this.isTerminateSearch =!this.isTerminateSearch;
    }else if(modal == 'success'){
      this.isTerminateSearch =false;
      this.isWarning = false;
      this.isSuccess = !this.isSuccess;

    }else {
      this.isTerminateSearch = false;
      this.isWarning =false;
    }
  }

  terminateSearch(){
  this.stopSearch();
  this.keepSearching = false;
  this.toggleModal('success')
  }




}
