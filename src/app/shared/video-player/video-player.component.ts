import { Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  player:any;

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

}
