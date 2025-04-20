import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { log } from 'node:console';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  credentials = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  registerError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.credentials.password !== this.credentials.confirmPassword) {
      this.registerError = 'Passwords do not match';
      return;
    }

    this.authService.register(this.credentials).subscribe((response) => {
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user.id);
        this.router.navigate(['/courses']);
      } else {
        this.registerError = 'Registration failed. Please try again.';
      }
    });
  }
}
