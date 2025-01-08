import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-analyse-video',
  templateUrl: './analyse-video.component.html',
  styleUrl: './analyse-video.component.scss'
})
export class AnalyseVideoComponent {

  data = true;
  uploadVideo: boolean = false;
  alertData = [
    {"video_title": "Video One", "alert_detail": "Firearm detected"},
    {"video_title": "Video Two", "alert_detail": "Person down"},
    {"video_title": "Video Three", "alert_detail": "Suspicious package"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"}
  ]

  videos = []
  viewAlert(){

  }

  toggleUploadVideo(){
    this.uploadVideo = !this.uploadVideo;
  }


}
