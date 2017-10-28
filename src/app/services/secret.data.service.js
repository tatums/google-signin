import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SecretDataService {
    constructor( http: Http) {
      this.http = http
    }

    getData(token) {
        // add authorization header with jwt token
        let headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': token
        });
        let options = new RequestOptions({ headers: headers });

      return this.http.get("https://fyx90cqgjh.execute-api.us-east-1.amazonaws.com/v1/foo", options)
    }
}
