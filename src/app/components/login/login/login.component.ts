import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.tokenStorage.signOut()
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.get(['username']).value, this.loginForm.get(['password']).value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.router.navigate(['/logs/send']);
      },
      err => {
        this.tokenStorage.signOut()
        console.log(err)
      }
    );
  }

}
