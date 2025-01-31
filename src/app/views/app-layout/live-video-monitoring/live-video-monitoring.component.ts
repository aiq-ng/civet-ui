import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Peer from 'simple-peer';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-live-video-monitoring',
  templateUrl: './live-video-monitoring.component.html',
  styleUrl: './live-video-monitoring.component.scss'
})
export class LiveVideoMonitoringComponent {

  @ViewChild('myVideo', { static: false }) myVideo!: ElementRef;
  @ViewChild('remoteVideo', { static: false }) remoteVideo!: ElementRef;

  peer!: any;
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

  startStreaming() {
  }

  viewAlert(){}

}
