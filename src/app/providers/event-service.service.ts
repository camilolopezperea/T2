import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  public url = 'https://run.mocky.io/v3/913ca793-29c1-469d-a3a7-318e3fcd0f6b'; 

  constructor(private http: HttpClient) {
   
  }
   
  getMock(): Observable<any>{
    return this.http.get<any>(this.url);

  }

}