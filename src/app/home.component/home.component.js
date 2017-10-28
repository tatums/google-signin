import { Component } from '@angular/core'
import { SecretDataService } from '../services/secret.data.service'
import { UserService } from '../services/user.service'
import { Observable } from 'rxjs/Rx'

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
    this.userService.currentUser
      .map(user => user.Zi.id_token)
      .flatMap(token => {
        if (token) {
          return this.secretDataService.getData(token)
        } else {
          return Observable.empty();
        }
      })
      .map(resp => resp.json())
      .startWith({message: "loading..."})
      .subscribe(resp => this.resp = resp)
  }

}
