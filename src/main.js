import 'reflect-metadata'
import 'zone.js'
//import 'rxjs/Rx' //adds observable methods like map, catch, ect.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
import { enableProdMode } from '@angular/core'

platformBrowserDynamic().bootstrapModule(AppModule)

