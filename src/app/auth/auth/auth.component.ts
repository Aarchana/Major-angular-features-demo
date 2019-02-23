import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserCredential } from './UserCredential';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public userStatus: string;
  public user: UserCredential;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new UserCredential();
  }

  setUserStatus() {
    this.userStatus = this.authService.isLoggedIn ? 'logged in' : 'logged Out';
  }

  public login() {
    this.authService.login().subscribe(res => {
      this.router.navigate(['/profile']);
      this.setUserStatus();
    });
  }
}
