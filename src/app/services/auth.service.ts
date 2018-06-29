import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'xxx',
    domain: 'xxx.auth0.com',
    responseType: 'token id_token',
    audience: 'https://app-new.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }
}
