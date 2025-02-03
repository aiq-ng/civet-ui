import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRTCService {
  private pc: RTCPeerConnection;

  constructor() {
    this.pc = new RTCPeerConnection();
  }

  async startStream() {
    const video = document.getElementById('video') as HTMLVideoElement;
    this.pc.ontrack = (event) => {
      video.srcObject = event.streams[0];
    };

    // Exchange SDP offers/answers and ICE candidates via WebSocket
  }
}
