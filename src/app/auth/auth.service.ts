import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean;

  constructor(private httpClient: HttpClient) { }

  public login (): Observable<boolean> {
    return this.httpClient.get<boolean>('http://localhost:4200/login').pipe(tap(res => this.isLoggedIn = true));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
