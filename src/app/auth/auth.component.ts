import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    // get email and password
    const email = form.value.email;
    const password = form.value.password;

    // initialize nickname
    let nickname = '';

    this.isLoading = true;

    if (!this.isLoginMode) {
      // get nickname
      nickname = form.value.nickname;
      // post to register with nickname
      this.authService.signUp(email, password, nickname)
      .then(resData => {
        // catch response

        // set user and navigate to recipes page
        this.authService.setUser(resData.data.email, resData.data.userId, resData.data.nickname, resData.data.token);
      })
      .catch(err => {
        // catch error message
        this.error = err.response.data.message;
        this.isLoading = false;
      });
    } else {
      // ignore nickname and login
      // post to register with nickname
      this.authService.login(email, password)
      .then(resData => {
        // catch response

        // set user and navigate to recipes page
        this.authService.setUser(resData.data.email, resData.data.userId, resData.data.nickname, resData.data.token);
      })
      .catch(err => {
        // catch error message
        this.error = err.response.data.message;
        this.isLoading = false;
      });
    }

    // reset the form
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
