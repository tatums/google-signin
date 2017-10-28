import { Component } from '@angular/core'
import { SecretDataService } from '../services/secret.data.service'
import { UserService } from '../services/user.service'

@Component({
  template: `<h1>HOME</h1>
            <p>{{ resp?.message }}</p>`,
})

export class HomeComponent {

  constructor(userService: UserService, secretDataService: SecretDataService) {
    this.userService = userService
    this.secretDataService = secretDataService
  }

  ngOnInit() {
    this.data = this.userService.currentUser
      .map(user => user.Zi.id_token)
      .flatMap(token => this.secretDataService.getData(token))
      .map(resp => resp.json())
      .subscribe(resp => this.resp = resp)
  }

}
