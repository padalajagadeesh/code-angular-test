import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.errorMessage = ''; // Clear error on success
      },
      (error) => {
        console.error('Registration failed', error);
        this.errorMessage = 'Registration failed. Try again.';
      }
    );
  }
}
