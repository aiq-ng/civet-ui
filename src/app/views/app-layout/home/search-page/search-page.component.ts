import { SearchService } from './../../../../services/search.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


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
    searchQuery: string = ''; // Holds the search query
    searchResults: any[] = []; // Holds the search results
    searchInterval: any; // Holds the interval ID
    searchTimeout: any; // Holds the timeout ID
    searchKeyword:any;
    products:any;



    constructor(private router:Router, private activatedRoute: ActivatedRoute, private searchService:SearchService){}

  ngOnInit() {
    this.products=[{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
]

    this.activatedRoute.queryParams.subscribe( params => {
      this.searchKeyword = params['q'] || '';
      console.log('search keyword', this.searchKeyword)
      this.performTextSearch(this.searchKeyword);
    })

    this.items = [
        { label: 'Search results' },

    ];

    this.searchService.searchQuery$.subscribe(
      query => {
        this.searchQuery = query;
        console.log('search query', this.searchQuery)
      }
    )

    this.home = { icon: 'pi pi-home', routerLink: '/app/home' };


  }


//   getSeverity(status: string) {
//     switch (status) {
//         case 'INSTOCK':
//             return 'success';
//         case 'LOWSTOCK':
//             return 'warn';
//         case 'OUTOFSTOCK':
//             return 'danger';
//     }
// }


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

  // perform text search
  performTextSearch(keyword:string): void {
    console.log('performing text search')
    this.searchService.searchLicensePlate(keyword).subscribe(
      res => {
        this.searchResults = res;
        console.log('search results', this.searchResults);
      }, err=>{
        console.log(err);
        this.searchResults = [];
      }
    )
  }

  // Perform image search
  performImageSearch(): void {
    // Simulate a search operation
    const result = `Result for "${this.searchQuery}" at ${new Date().toLocaleTimeString()}`;
    this.searchResults.push(result);

    console.log('Searching...', result);
  }

  // Stop the search process
  stopSearch(): void {
    if (this.searchInterval) {
      clearInterval(this.searchInterval); // Stop the interval
      this.searchInterval = null;
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout); // Stop the timeout
      this.searchTimeout = null;
      this.keepSearching = false;
    }
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
