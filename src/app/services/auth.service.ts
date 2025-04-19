import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(email: string, password: string): Observable<any> {
    if (email === 'vatanseveremre90@gmail.com' && password === '123456')
      return this.apiService.get<any>('auth/login.json');
    else return this.apiService.get<any>('auth/loginError.json');
  }

  register(data: any): Observable<any> {
    return this.apiService.get<any>('auth/register.json');
  }
}
