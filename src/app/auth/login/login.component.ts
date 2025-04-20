import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  credentials = { email: 'vatanseveremre90@gmail.com', password: 'Emre123' };
  loginError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(this.credentials.email, this.credentials.password)
      .subscribe((response) => {
        this.loginError = null;
        if (response.success) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id);
          this.router.navigate(['/courses']);
        } else {
          this.loginError = 'Invalid credentials';
        }
      });
  }
}
