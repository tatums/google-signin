import { Component } from '@angular/core'
import template from './user.html'
import { UserService } from '../services/user.service'

@Component({
  selector: 'current-user',
  template: template
})

export class UserComponent {
  constructor(userService: UserService) {
    this.userService = userService
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.user = user
    })
    this.userService.currentUserProfile.subscribe(profile => {
      this.profile = profile
    })
  }
}
