import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrl: './alert-list.component.scss'
})
export class AlertListComponent {

  @Input() videoTitle!: string;
  @Input() alertDetail!: string;
  @Input() isVideoName!: boolean;

  @Output() viewClick = new EventEmitter();


  onViewClick (){
    this.viewClick.emit();
    console.log('Alert Detail Viewed:', this.alertDetail);
  }

}
