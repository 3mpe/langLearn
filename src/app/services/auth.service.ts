import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(email: string, password: string): Observable<any> {
    if (email === 'vatanseveremre90@gmail.com' && password === '123456')
      return this.apiService.get<any>('auth/login.json');
    else return this.apiService.get<any>('auth/loginError.json');
  }

  register(data: any): Observable<any> {
    return this.apiService.get<any>('auth/register.json');
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
