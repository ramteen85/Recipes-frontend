import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthService {

  user = new Subject<User>();
  private tokenExpirationTimer: any;

  constructor(private router: Router) {}

  getToken() {
    return localStorage.getItem('token');
  }

  signUp(email: string, password: string, nickname: string) {
    return axios.post('http://localhost:8080/auth/register', {
        email,
        password,
        nickname
    });
  }

  login(email: string, password: string) {
    return axios.post('http://localhost:8080/auth/login', {
        email,
        password
    });
  }

  setUser(email: string, id: string, nickname: string, userToken: string) {
    localStorage.setItem('id', id);
    localStorage.setItem('email', email);
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('token', userToken);

    const loadedUser = new User(
      email,
      id,
      nickname,
      userToken
    );

    this.user.next(loadedUser);
    this.router.navigate(['/recipes']);
  }

  logout() {
    this.user.next(null);
    clearInterval(this.tokenExpirationTimer);
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('nickname');
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  // implement later for expiration of tokens

  autoLogout(expirationDuration: number) {
    // need to set up token expiry later - need duration in ms.

    this.tokenExpirationTimer = setInterval(() => {
      if (this.getToken()) {
        this.logout();
      }
    }, expirationDuration);
  }

  autoLogin() {
    if (!localStorage.getItem('token')) {
      this.user.next(null);
      return;
    }

    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');
    const nickname = localStorage.getItem('nickname');
    const userToken = localStorage.getItem('token');

    const loadedUser: User = new User(
      email,
      id,
      nickname,
      userToken
    );

    console.log(loadedUser);

    this.user.next(loadedUser);
    this.router.navigate(['/recipes']);
  }
}
