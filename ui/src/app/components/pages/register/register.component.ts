import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthsService } from '../../../services/auths/auths.service';
import { environment } from '../../../../environments/environment.development';
import { Register } from '../../../services/auths/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router, private socialAuthServiceConfig: SocialAuthService, private http: HttpClient, private authsService: AuthsService){}

  tokenKey = "token"
  form !: FormGroup;
  fb = inject(FormBuilder);
  decodedToken: any | null;

  apiUrl = environment.apiUrl;

  register() {
    console.log(this.form.value);
    this.authsService.register(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        const errorMessage = err.error?.message || 'An unexpected error occurred';
        console.log(errorMessage);
        alert(errorMessage);
      }
    });
  }

  loginWithFacebook(): void {
    this.socialAuthServiceConfig.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
      this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
    });
  }

  sendTokenToAPI(provider: string, providerKey: string, email: string, firstName: string, lastName: string, photoUrl: string): void {
      this.authsService.sendTokenToAPI(provider, providerKey, email, firstName, lastName, photoUrl);
  }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.socialAuthServiceConfig.authState.subscribe((user) => {
      console.log("Worked!");
      this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
    });
  }
}
