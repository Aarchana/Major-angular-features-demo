import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserCredential } from './UserCredential';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public userStatus: string;
  public user: UserCredential;
  @ViewChild('f')
  public ngForm: NgForm; 

  constructor(private authService: AuthService, private router: Router) {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("constructor");
    this.user = new UserCredential();
  }

  setUserStatus() {
    this.userStatus = this.authService.isLoggedIn ? 'logged in' : 'logged Out';
  }

  public login() {
    console.log(this.user);
    if(this.ngForm.valid) {
      this.authService.login().subscribe(res => {
        this.router.navigate(['/products']);
        this.setUserStatus();
      });
    }
  }
}
