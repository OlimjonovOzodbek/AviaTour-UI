import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private socialAuthServiceConfig: SocialAuthService, private http: HttpClient){}

  tokenKey = "token"
  form!: FormGroup;
  fb = inject(FormBuilder);

  apiUrl = environment.apiUrl;

  loginWithFacebook(): void {
    this.socialAuthServiceConfig.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
      this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
    });
  }

  sendTokenToAPI(provider: string, providerKey: string, email: string, firstName: string, lastName: string, photoUrl: string): void {
      this.http.post<any>(`${this.apiUrl}Auths/ExternalLogin`, { provider, providerKey, email, firstName, lastName, photoUrl }).subscribe(
        response => {
          console.log(response);
          if (response.isSuccess) {
            //localStorage.clear();
            localStorage.setItem(this.tokenKey, response.token)
          }
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/']);
              setTimeout(() => {
              window.location.reload();
              }, 1);
          });
        },
        error => {
          console.error('Error sending token', error);
          // Handle error if needed
        }
      );
  }

  
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.socialAuthServiceConfig.authState.subscribe((user) => {
      console.log("Worked!");
      this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
    });
  }
}
