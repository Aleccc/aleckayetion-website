import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  verify_recaptcha(data){
    const url = environment.aleckayetion_api_url + "/recaptcha/verify/";

    let headers = new HttpHeaders(environment.headers);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(url, {
      secret: environment.recaptcha_site_key,
      response: data,
    }, {
      headers: headers,
      responseType: 'json',
    })

  }
  send(data){
    const url = environment.aleckayetion_api_url + "/mailer/send/";

    let headers = new HttpHeaders(environment.headers);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(url, data, {
      headers: headers,
      // responseType: 'json',
    })

  }
}
