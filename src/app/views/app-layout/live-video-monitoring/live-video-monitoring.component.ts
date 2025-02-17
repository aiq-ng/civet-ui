import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Peer from 'simple-peer';
import { HttpServiceService } from '../../../services/http-service.service';
import { io } from 'socket.io-client';
import Hls from 'hls.js';
import { webSocket } from 'rxjs/webSocket';
import { CameraService } from '../../../services/camera.service';
import { Router } from '@angular/router';

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
  cameras?:any;
  alertData:any = []
  alertLoading:boolean = false;
  cameraLoading:boolean = false;
  cameraDetail!:any;

  constructor(private cameraServive:CameraService, private router:Router) {}

  ngAfterViewInit() {
    const video = document.getElementById('video') as HTMLVideoElement;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(`http://103.124.107.209:8035/hls/output.m3u8?t=${Date.now()}`);  // Your HLS stream URL
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = `http://103.124.107.209:8035/hls/output.m3u8?t=${Date.now()}`;
      video.play();
    }
  }

  // ngAfterViewInit() {
  //   const video = document.getElementById('video') as HTMLVideoElement;
  //   const signalingSocket = webSocket('ws://103.124.107.209:8081'); // WebSocket signaling server
  //   console.log('service working')
  //   const peer = new Peer({
  //     initiator: true,  // This client starts the connection
  //     trickle: false
  //   });

  //   // Send WebRTC offer to the signaling server
  //   peer.on('signal', (data) => {
  //     signalingSocket.next({ type: 'offer', sdp: data });
  //   });

  //   // Listen for incoming signaling messages
  //   signalingSocket.subscribe({
  //     next: (message: any) => {
  //       console.log('Received from signaling server:', message);

  //       if (message.type === 'offer' || message.type === 'answer') {
  //         peer.signal(message.sdp);
  //       }

  //       if (message.type === 'candidate') {
  //         peer.signal(message.candidate);
  //       }
  //     }
  //   });

  //   // Handle stream when it's received
  //   peer.on('stream', (stream: MediaStream) => {
  //     console.log('Received video stream');
  //     video.srcObject = stream;
  //     video.play();
  //   });

  //   // Handle ICE candidates
  //   peer.on('icecandidate', (event) => {
  //     if (event.candidate) {
  //       signalingSocket.next({ type: 'candidate', candidate: event.candidate });
  //     }
  //   });

  //   // Debugging
  //   peer.on('connect', () => console.log('WebRTC connection established'));
  //   peer.on('close', () => console.log('WebRTC connection closed'));
  // }



  ngOnInit() {
    this.getCameras();

    this.getSingleCamera()
    console.log(this.getParamsId())
  }

  route(page:string){
    this.router.navigate([page]);
  }

  getCameras(){
    this.cameraLoading = true;
    this.cameraServive?.getCameras().subscribe(
      res=>{
        console.log('cameras', res)
        this.cameras = res;
        this.cameraLoading = false;
      }, err=>{
        console.log(err)
        this.cameraLoading = false;
      }
    )
  }

  getSingleCamera(){
    this.cameraServive.getSingleCamera(this.getParamsId()).subscribe(
      res=>{
        this.cameraDetail = res;
        this.cameraLoading = false;
      }, err=>{
        console.log(err)
      }
    )
  }


  getParamsId(){
    const url = window.location.href;
    console.log('url', url);
    const segments = url.split('/');
    let id = segments[segments.length - 1];
    return id
  }

}
