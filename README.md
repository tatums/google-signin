## Google Oauth example
This is an example app that uses google for authentication
and then uses the JWT token to make an authenticated api call
to API Gateway/Lambda endpoint to fetch some data.


#### Frontend

    $ npm start

* Angular
* Webpack

##### Components
* [HomeComponent](./src/app/home.component/)
  - This component requires a loged in user
  - redirects to [LoginComponent](./src/app/login.component/) via the [auth.guard.js](./src/app/auth.guard.js)
* [LoginComponent](./src/app/login.component/)
  - Provides a buttons for Signin, SignOut, and revoke access

##### Services
* [GoogleAuthService](./src/services/google.auth.service.js)
  - wrapper for the google api
  - This is responsible for loading the [gapi client lib](https://developers.google.com/api-client-library/javascript/start/start-js)
* [SecretDataService](./src/services/google.auth.service.js)
  - This pulls data from our APIGateway/Lambda api
* [UserService](./src/services/user.service.js)
  - This holds the current user and auth token

#### APIGateway/Lambda (server)

See the README located at [server/README.md](./server/README.md)

## Resources
https://outcrawl.com/todo-list-angular-google-app-engine-part-2/
