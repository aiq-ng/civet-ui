import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.scss'
})
export class EmptyPageComponent {
  loading:boolean = false;
  @Input() message!: string;
  @Input() buttonName!: string;
  @Input() buttonIcon!: string;
  @Output() buttonAction = new EventEmitter();

  onclick(){
    this.buttonAction.emit()
  }

}
