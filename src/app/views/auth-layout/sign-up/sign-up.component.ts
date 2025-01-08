import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  registrationForm: any;
  loading:boolean = false;
  isSubmitted:boolean = false;
  hidePassword:boolean = true;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  get f(){return this.registrationForm.controls}


  register(){
    console.log('submitted')
    this.isSubmitted = true;
    this.loading=true
    if(this.registrationForm.invalid){
      this.loading=false;
      return;
    }

    this.auth.signup(this.registrationForm.value).subscribe(
      res=> {
        console.log(res);
      },
      err=> {
        console.log(err)
      }
    );
  }


  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

}
