import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Peer from 'simple-peer';
import { HttpServiceService } from '../../../services/http-service.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-live-video-monitoring',
  templateUrl: './live-video-monitoring.component.html',
  styleUrl: './live-video-monitoring.component.scss'
})
export class LiveVideoMonitoringComponent {

  @ViewChild('myVideo', { static: false }) myVideo!: ElementRef;
  @ViewChild('remoteVideo', { static: false }) remoteVideo!: ElementRef;
  private socket: any;
  private peerConnection: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  private videoElement!: HTMLVideoElement;

  ngOnInit() {
    this.socket = io('ws://localhost:8000/ws/webrtc/');

    this.socket.on('message', (message: any) => {
      console.log('Received message:', message);
      this.handleSignalingMessage(message);
    });

    this.startWebRTC();
  }

  async startWebRTC() {
    this.videoElement = document.getElementById('video') as HTMLVideoElement;
    this.peerConnection = new RTCPeerConnection();

    // Add media stream to WebRTC connection
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.localStream.getTracks().forEach(track => {
        this.peerConnection!.addTrack(track, this.localStream!);
      });

      this.peerConnection!.ontrack = (event) => {
        this.videoElement.srcObject = event.streams[0];
      };
    } catch (error) {
      console.error('Error getting media stream:', error);
    }
  }

  handleSignalingMessage(message: string) {
    // Handle the incoming signaling messages here (offer, answer, ice candidates)
  }

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
