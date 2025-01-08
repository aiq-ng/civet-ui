import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() videoTitle!: string;
  @Input() dateCreated!: string;

}
