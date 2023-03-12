import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Bulletin } from './bulletin';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  api = "http://localhost:8080";
  constructor(private http : HttpClient) { }

  getAllbulletin(){
    return this.http.get<Bulletin[]>(this.api + "/api/bulletins");
  }
}
