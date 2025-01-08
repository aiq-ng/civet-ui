import { Component } from '@angular/core';

@Component({
  selector: 'app-video-report',
  templateUrl: './video-report.component.html',
  styleUrl: './video-report.component.scss'
})
export class VideoReportComponent {

  data1 = [
          {"name": "Nats", "type": "person"},
          {"name": "Alice", "type": "person"},
          {"name": "Bob", "type": "person"},
          {"name": "Charlie", "type": "person"},
          {"name": "David", "type": "person"}
        ]

  data2 = [
    {"item": "License plate", "type": "Object"},
    {"item": "fire arm", "type": "Object"},
    {"item": "Orange", "type": "Object"},
    {"item": "Car", "type": "Object"},
    {"item": "Tree", "type": "Object"}
  ]

}
