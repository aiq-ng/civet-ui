import { Component, ViewChild, ElementRef  } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-live-video-monitoring',
  templateUrl: './live-video-monitoring.component.html',
  styleUrl: './live-video-monitoring.component.scss'
})
export class LiveVideoMonitoringComponent {

  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef;
  mediaRecorder!: MediaRecorder;
  chunks: any[] = [];
  stream!: MediaStream;
  socket!: WebSocket;
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

  constructor(private api: HttpServiceService) { }

  startStream() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.stream = stream;
        this.videoElement.nativeElement.srcObject = stream;
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
        this.mediaRecorder.ondataavailable = event => this.sendChunk(event.data);
        this.mediaRecorder.start(100); // Send data every 100ms
        this.socket = new WebSocket('ws://20.248.119.161:8003/ws/video-stream');
      })
      .catch(error => console.error('Error accessing media devices.', error));
  }

  // stream from a remote camera
  // startStream() {
  //   this.socket = new WebSocket('ws://YOUR_CCTV_WEBSOCKET_URL');
  //   this.socket.binaryType = 'arraybuffer';

  //   this.socket.onmessage = (event) => {
  //     const blob = new Blob([event.data], { type: 'video/webm' });
  //     const url = URL.createObjectURL(blob);
  //     this.videoElement.nativeElement.src = url;
  //   };

  //   this.socket.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //   };
  // }

  sendChunk(chunk: Blob) {
    // console.log(chunk)
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(chunk);
    }
  }

  stopStream() {
    this.mediaRecorder.stop();
    this.stream.getTracks().forEach(track => track.stop());
    this.socket.close();
  }

  viewAlert(){}

}
