import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit() {
      this.loginForm = new FormGroup({
        "email": new FormControl(null, { validators: [ Validators.required] }),
        "password": new FormControl(null, { validators: [Validators.required] })
      });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      alert("Please enter valid credentials to login.");
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.loginUser(email, password);

  }
}
