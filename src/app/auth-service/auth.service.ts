import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/login', { username, password });
  }

  register(username: string, password: string) {
    return this.http.post('http://localhost:3000/register', { username, password });
  }
}
