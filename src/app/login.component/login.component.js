import { Component } from '@angular/core'
import template from './login.html'
import { GoogleAuthService } from "../services/google.auth.service"
import { UserService } from "../services/user.service"

@Component({
  template: template
})

export class LoginComponent {
  constructor(googleAuthService: GoogleAuthService, userService: UserService) {
    this.googleAuthService = googleAuthService
    this.userService = userService
  }

  signIn() {
    this.googleAuthService.googleAuth.signIn()
      .then(resp => {
        const user = this.googleAuthService.googleAuth.currentUser.get()
        this.userService.setAuth(user)
    })
  }

  signOut() {
    this.googleAuthService.googleAuth.signOut()
    this.userService.purgeAuth()
  }

  revoke() {
    this.userService.purgeAuth()
    this.googleAuthService.googleAuth.disconnect()
  }

}
