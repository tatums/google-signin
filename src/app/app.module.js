import { NgModule, APP_INITIALIZER } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'
import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent }  from './app.component'
import { HomeComponent }  from './home.component/home.component'
import { LoginComponent }  from './login.component/login.component'
import { UserComponent }  from './user.component/user.component'
import { NavigationComponent }  from './navigation.component/navigation.component'
import { GoogleAuthService }  from './services/google.auth.service'
import { UserService }  from './services/user.service'
import { AuthGuard }  from './auth.guard'
import { SecretDataService } from './services/secret.data.service'


export function startupServiceFactory(googleAuthService: GoogleAuthService) {
  return () => googleAuthService.load()
}

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    UserComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    GoogleAuthService,
    AuthGuard,
    UserService,
    SecretDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [GoogleAuthService],
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
