import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { GoogleAuthService } from './google.auth.service'

@Injectable()
// Inpiration from this repo
// https://github.com/gothinkster/angular-realworld-example-app/blob/8eef9be1bb1cff6b9902166fe12c211489764469/src/app/shared/services/user.service.ts
export class UserService {

  constructor (googleAuthService: GoogleAuthService) {
    this.googleAuthService = googleAuthService
    this.currentUserSubject = new BehaviorSubject()
    this.currentUserProfileSubject = new BehaviorSubject()
    this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged()
    this.currentUserProfile = this.currentUserProfileSubject.asObservable().distinctUntilChanged()
    this.isAuthenticatedSubject = new ReplaySubject(1)
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable()
  }

  // This runs once on application startup.
  populate() {
    if (this.googleAuthService.googleAuth.isSignedIn.get() ) {
      this.setAuth( this.googleAuthService.googleAuth.currentUser.get() )
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user) {
    const profile = user.getBasicProfile()
    this.currentUserProfileSubject.next(profile)
    this.currentUserSubject.next(user)
    this.isAuthenticatedSubject.next(true)
  }

  purgeAuth() {
    // Set current user to an empty object
    this.currentUserSubject.next({Zi: {id_token: null}})
    this.currentUserProfileSubject.next(null)
    // Set auth status to false
    this.isAuthenticatedSubject.next(false)
  }

}
