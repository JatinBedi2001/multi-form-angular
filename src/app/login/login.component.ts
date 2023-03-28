import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const isAuthenticated = true; 

    if (isAuthenticated) {
      localStorage.setItem('user', JSON.stringify({ username: this.username, role: 'admin' }));
      this.router.navigate(['/form3']);
    }
  }
}
