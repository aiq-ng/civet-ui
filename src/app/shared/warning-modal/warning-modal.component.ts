import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrl: './warning-modal.component.scss'
})
export class WarningModalComponent {
  @Input() visible!: boolean;
    @Input() message!: string;
    @Input() button1!: string;
    @Input() button2!: string;
    @Output() action1= new EventEmitter();
    @Output() action2= new EventEmitter();

    constructor(private router:Router) { }

    ngOnInit() {}

    route(page:string){
      this.router.navigate([page]);
    }

    actionOne(){
      this.action1.emit();
    }

    actionTwo(){
      this.action2.emit();
    }

}
