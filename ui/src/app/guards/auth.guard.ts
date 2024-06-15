import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const tokenKey = 'token';

function isLocalStorageAvailable(): boolean {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  if (isLocalStorageAvailable()) {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      inject(Router).navigateByUrl('/login');
      return false;
    }
    return true;
  } else {
    inject(Router).navigateByUrl('/login');
    return false;
  }
};

export const expireGuard: CanActivateFn = (route, state) => {
  if (isLocalStorageAvailable()) {
    const localToken = localStorage.getItem(tokenKey);
    if (!localToken) {
      inject(Router).navigateByUrl('/login');
      return false;
    }

    const decodedToken: any = jwtDecode(localToken);
    const expirationTime = decodedToken.exp * 1000;
    const currentTime = Date.now();
    if (currentTime > expirationTime) {
      inject(Router).navigateByUrl('/login');
      return false;
    }
    return true;
  } else {
    inject(Router).navigateByUrl('/login');
    return false;
  }
};