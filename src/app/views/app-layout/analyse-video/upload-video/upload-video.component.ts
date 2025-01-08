import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpServiceService } from '../../../../services/http-service.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.scss'
})
export class UploadVideoComponent {
  files: File[] = [];
  selectedFile: File| null = null;
  videoForm!: any;
  uploadProgress: number = 0;


  constructor(
    private fb: FormBuilder,
    private api: HttpServiceService
  ){}


  ngOnInit(){
    this.videoForm = this.fb.group({
      videoFile: ['']
    });
  }

  onFileSelected(event:any){
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log(this.selectedFile)
    }
  }



   // Submit form to upload file
   onSubmit() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.set('file', this.selectedFile);

    this.api.post('video/analyze/', formData).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )

  }
}
