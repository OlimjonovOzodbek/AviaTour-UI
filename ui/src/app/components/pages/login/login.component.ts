import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { AuthsService } from '../../../services/auths/auths.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private socialAuthServiceConfig: SocialAuthService, private http: HttpClient, private authsService: AuthsService){}

  tokenKey = "token"
  form !: FormGroup;
  fb = inject(FormBuilder);
  decodedToken: any | null;

  apiUrl = environment.apiUrl;

  login(){
    this.authsService.login(this.form.value).subscribe(
      {
        next: (response) => {
          console.log(response);

          this.decodedToken = jwtDecode(localStorage.getItem(this.tokenKey)!)
          if(this.decodedToken.role == 'Admin'){
            console.log(this.decodedToken.role);
          }
          else if(this.decodedToken.role == 'User'){
            console.log(this.decodedToken.role);
          }
        }, error: (err) => {
            alert(err.error.message)

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.socialAuthServiceConfig.authState.subscribe((user) => {
      console.log("Worked!");
      this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
    });
  }
}