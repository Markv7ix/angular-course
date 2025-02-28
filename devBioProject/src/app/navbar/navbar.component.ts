import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

authenticated : boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() : void {
    this.subscribeToAuthService();
  }

  logout() : void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  subscribeToAuthService() : void {
    this.authService.isAuthenticated().
      subscribe(res => this.authenticated = res);
  }
}
