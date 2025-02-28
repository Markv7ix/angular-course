import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService : AuthService, private router: Router) {

  }

  login() : void {
    this.authService.login();
    this.router.navigate([""]);
  }
}
