import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const Headers = {
  'Content-Type': 'application/json;',
  'Access-Control-Allow-Origin':   '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*'
};

const headers = new HttpHeaders(Headers);

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  apiUrl = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

  constructor(public http: HttpClient) { }

  getPersonas(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl).subscribe( data => {
        resolve(data);
      }, error => {
        resolve(error);
      });
    });
  }
}
