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
    return this.apiService.post<any>('auth/login', {
      password,
      email,
    });
  }

  register(data: any): Observable<any> {
    return this.apiService.post<any>('auth/register', data);
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
