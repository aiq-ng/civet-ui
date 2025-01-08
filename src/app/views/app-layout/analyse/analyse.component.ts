import { Component } from '@angular/core';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.scss'
})
export class AnalyseComponent {

  data = true;

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

}
