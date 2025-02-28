import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BioComponent } from './bio/bio.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,/*BioComponent,*/CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
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
