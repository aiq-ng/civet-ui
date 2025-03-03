import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('myVideo') videoElement!: ElementRef;
  private socket: any;
  private peerConnection: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  cameras?:any;
  alertData:any = []
  alertLoading:boolean = false;
  startRecordingLoading:boolean = false;
  stopRecordingLoading:boolean = false;
  cameraLoading:boolean = false;
  cameraDetail!:any;
  cameraRecordings:any;
  selectedVideoUrl: string | null = null;


  constructor(private cameraServive:CameraService, private router:Router) {}


  ngOnInit() {
    this.getCameras();
    this.getSingleCamera()
    console.log(this.getParamsId())

    this.getRecordings()
  }



  startRecording(){
    console.log('starting record')
    this.startRecordingLoading = true;
    this.cameraServive.startRecording(this.getParamsId()).subscribe(
      res=>{
        console.log('recording started', res)
        this.startRecordingLoading = false;
      }, err=>{
        console.log(err)
        this.startRecordingLoading = false;
      }
    )
  }

  stopRecording(){
    console.log('starting record')
    this.stopRecordingLoading = true;
    this.cameraServive.stopRecording(this.getParamsId()).subscribe(
      res=>{
        console.log('recording started', res)
        this.stopRecordingLoading = false;
        this.getRecordings()
      }, err=>{
        console.log(err)
        this.stopRecordingLoading = false;
      }
    )
  }

  getRecordings() {
    this.cameraServive.getRecording(this.getParamsId()).subscribe(
      (res) => {
        this.cameraRecordings = res;
        console.log('recordings', this.cameraRecordings);
        this.selectedVideoUrl = `http://41.73.6.101:8070/${this.extractRelativePath(this.cameraRecordings[5].file_path)}`;
        this.reloadVideo(); // Force reload and play
      },
      (err) => {
        console.log(err);
      }
    );
  }

  playVideo(videoUrl: string): void {
    this.selectedVideoUrl = `http://127.0.0.1:8000${videoUrl}`
    this.reloadVideo();
  }

  reloadVideo(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement as HTMLVideoElement;
      video.load();
      video.play();
    }
  }


  extractRelativePath(filePath: string): string {
    const lastMediaIndex = filePath.lastIndexOf('media/');
    if (lastMediaIndex !== -1) {
      return filePath.substring(lastMediaIndex);
    } else {
      return ''; // Or handle the case where "media/" is not found
    }
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
    const segments = url.split('/');
    let id = segments[segments.length - 1];
    return id
  }


}
