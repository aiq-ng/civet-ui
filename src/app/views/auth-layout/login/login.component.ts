import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: any;
  isSubmitted: boolean = false;
  loading: boolean = false;
  hidePassword: boolean = true;

  constructor(private auth: AuthService, private fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(){return this.loginForm.controls;}

  login(){
    this.isSubmitted = true;
    this.loading = true;

    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }

    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

}
