import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  public url = 'https://invessoft.com/api/eventos/2'; 

  constructor(private http: HttpClient) {
    //this.url = 'https://run.mocky.io/v3/7a09e5b6-c4b6-4a34-a2d3-1d0e32149e2c';
    //this.url = 'https://invessoft.com/api/eventos/2';
  }
   
  getMock(): Observable<any>{
    return this.http.get<any>(this.url);

  }

}