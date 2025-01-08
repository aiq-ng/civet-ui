import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MessageService]
})
export class HeaderComponent {
  items: any;
  files = [];
  cameras: string[] = [];
  checkAll: any;
  totalSize : number = 0;
  loading:boolean = false;

  totalSizePercent : number = 0;

  constructor(private config: PrimeNGConfig,
              private messageService: MessageService,
              private router:Router) {}


    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                  {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: () => {
                      // pass a function here
                  }
                }
                ]
            }
        ];
    }

    route(page:string){
      console.log('route clicked')
      this.router.navigate([page]);
    }

    choose(event:any, callback:any) {
      callback();
  }

  onRemoveTemplatingFile(event:any, file:any, removeFileCallback:any, index:any) {
      removeFileCallback(event, index);
      this.totalSize -= parseInt(this.formatSize(file.size));
      this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear:any) {
      clear();
      this.totalSize = 0;
      this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event:any) {
      this.files = event.currentFiles;
      this.files.forEach((file:any) => {
          this.totalSize += parseInt(this.formatSize(file.size));
      });
      this.totalSizePercent = this.totalSize / 10;
  }

  uploadEvent(callback:any) {
      callback();
  }

  formatSize(bytes:any) {
      const k = 1024;
      const dm = 3;
      const sizes:any = this.config.translation.fileSizeTypes;
      if (bytes === 0) {
          return `0 ${sizes[0]}`;
      }

      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

      return `${formattedSize} ${sizes[i]}`;
  }


}
