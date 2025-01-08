import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent {
  @Input() visible!: boolean;
  @Input() message!: string;
  @Input() homeButton!: string;
  @Input() otherButton!: string;
  @Output() otherAction= new EventEmitter();
  @Output() homeAction= new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {}

  route(page:string){
    this.router.navigate([page]);
  }

  actionOne(){
    this.otherAction.emit();
  }

  actionTwo(){
    this.homeAction.emit();
  }

}
