import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  @Input() cameraName!:string;
  @Output() loadVideo = new EventEmitter();

  onClick(){
    this.loadVideo.emit();
  }

}
