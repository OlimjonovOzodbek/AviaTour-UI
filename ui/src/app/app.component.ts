import { Component, inject, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

declare function showAlert(type:string,message:string) : void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
  localToken = localStorage.getItem("token");

  openDashboard(){
    showAlert('warning','This is a success alert!')
  }

  check() {
    try {
      if (!this.localToken || this.localToken === "") {
        inject(Router).navigateByUrl('/login');
      } else {
        try {
          const decodedToken: any = jwtDecode(this.localToken);
          const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          if (role == 'Admin') {
            return true;
          }
          else{
            return false;
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          inject(Router).navigateByUrl('/login');
          return false;
        }
      }
      return false;
    }
    catch {
      return false;
    }
  }

}
