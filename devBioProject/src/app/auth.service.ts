import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authResponse = new BehaviorSubject(false)
  private authenticated = this.authResponse.asObservable();

  constructor (private router: Router) { }

  canActivate() : boolean {
    if(!this.authResponse.value) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  isAuthenticated() : Observable<boolean>
  {
    return this.authenticated;
  }

  login () : void {
    this.authResponse.next(true);
  }

  logout () : void {
    this.authResponse.next(false);
    this.router.navigate(['/login']);
  }
}
