import { Injectable, Inject } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Injectable()

export class GoogleAuthService {

  constructor() {
    this.gapi = gapi

    this.loadGapi = new Promise((resolve, reject) => {
      return this.gapi.load('auth2', (resp) => {
        resolve(resp)
      })
    })

  }


  load() {
    return this.loadGapi.then(resp => {
      return new Promise((resolve, reject) => {
        this.gapi.auth2.init({
          client_id: '878735588022-m99vt5unaofu8rlos10kskbgl91vnmad.apps.googleusercontent.com',
          scope: 'profile',
          hosted_domain: 'ashlandstudios.com'
        })
        .then(() => {
          this.googleAuth = gapi.auth2.getAuthInstance()
          resolve()
        })
      })
    })
  }

}
