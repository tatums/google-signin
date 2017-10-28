import { Component } from '@angular/core'
import styles from './styles/app.styles.css'
import { UserService } from "./services/user.service"

@Component({
  selector: 'my-app',
  template: `
    <h1 class="callout">Angular Router</h1>
    <current-user></current-user>
    <navigation></navigation>
    <router-outlet></router-outlet>
  `,
  styles: [ styles ]
})

export class AppComponent {
  constructor (userService: UserService) {
    this.userService = userService
  }

  ngOnInit() {
    this.userService.populate()
  }
}
