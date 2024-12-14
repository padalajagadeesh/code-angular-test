import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authSer: AuthService) {}

  onLogin() {
    this.authSer.login(this.username, this.password).subscribe(
      (response: any) => console.log('Logged in!', response),
      (error: any) => console.error('Login failed', error)
    );
  }
}
