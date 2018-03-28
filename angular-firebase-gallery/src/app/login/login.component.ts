import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signin(){
    this.authService.login({
      email: this.email,
      password: this.password
    })
    .then(resolve => this.router.navigate(['gallery']))
    .catch(err => this.errorMsg = err.message)
  }

}
