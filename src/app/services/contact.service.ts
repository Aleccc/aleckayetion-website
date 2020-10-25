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

  send(data){
    const url = "https://aleckayetion-api.herokuapp.com/mailer/send/";

    let headers = new HttpHeaders(environment.headers);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(url, data, {
      headers: headers,
      // responseType: 'json',
    })

  }
}
