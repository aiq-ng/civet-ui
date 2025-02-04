import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig} from 'primeng/api';
import { CameraService } from '../../services/camera.service';
import { HttpServiceService } from '../../services/http-service.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MessageService]
})
export class HeaderComponent {
  items: any;
  file:any;
  cameras?: any = [];
  selelctedCameras:any = []
  keyword:string = "";
  checkAll: any;
  totalSize : number = 0;
  loading:boolean = false;
  searchType: string = ''
  isCheck: boolean = false;

  totalSizePercent : number = 0;

  constructor(private config: PrimeNGConfig,
              private messageService: MessageService,
              private router:Router,
              private cameraService:CameraService,
              private api: HttpServiceService,
              private searchService: SearchService) {}


    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                  {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: () => {
                      this.router.navigate(['/auth/login'])
                  }
                }
                ]
            }
        ];
        console.log('header activated');
        this.cameraService?.getCameras().subscribe(
          res=>{
            this.cameras = res;
            console.log('connected cameras', this.cameras);
          }
        )
    }

    route(page:string){
      console.log('route clicked')
      this.router.navigate([page]);
    }


  handleSearch(){
    this.search()
    this.saveSearchHistory();
    this.route('/app/search-page')
  }

  search(){
    // this.loading = true;
  }

  saveSearchHistory(){
    this.loading = true;
    let formData = new FormData
    if(this.keyword == ''){
      formData.append('search_keyword', 'image')
    }else{
      formData.append('search_keyword', this.keyword)
    }
    formData.append('object_type', this.searchType)
    formData.append('camera', JSON.stringify(this.selelctedCameras));
    formData.append('image', this.file);

    console.log('form data', formData);

    this.api.post('search-history/', formData).subscribe(
      res=>{
        console.log('search history saved', res);
        this.loading = false;
        this.searchService.setSearchQuery(formData);
      }, err=>{
        console.log('error saving search history', err);
        this.searchService.setSearchQuery(formData);
        this.loading = false;
      }
    )
  }

  // getConnectedCameras(){
  //   this.cameraService.getCameras().subscribe(
  //     res=>{
  //       this.connectedCameras = res;
  //       console.log('connected cameras', this.connectedCameras);
  //     }, err=>{
  //       console.log(err);
  //     }
  //   )
  // }

  checkAllCamera(){
    if(this.selelctedCameras.length === this.cameras.length){
      this.selelctedCameras = [];
      console.log('selected cameras', this.selelctedCameras)
      this.checkAll = false;
    }else{
      this.selelctedCameras = [...this.cameras];
      console.log('selected cameras', this.selelctedCameras)
        // for(let camera of this.cameras){
        //   this.selelctedCameras.push(camera);
        // }
    }

  }


  selectSearchType(type:string){
    this.searchType = type;
    console.log('search type selected', type)
  }

  onImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = input.files[0];
  }
  }
  private validateImageFile(file: File): boolean {
    const maxSize = 2 * 1024 * 1024; // 2MB
    // const allowedType = 'image/jpeg';

    if (file.size > maxSize || file.type ) {
      alert('Please upload a JPG image under 2MB');
      return false;
    }
    return true;
  }


}
