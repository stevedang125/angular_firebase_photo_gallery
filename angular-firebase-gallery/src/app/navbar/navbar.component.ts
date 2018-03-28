import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: 'Gallery';
  user: Observable<firebase.User>;

  constructor(private authService: AuthService,
              private router: Router) 
  {

  }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logOut(){
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
