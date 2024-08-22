import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CssTutorialService {

  URL_API = "https://jsonplaceholder.typicode.com";

  constructor(private _http: HttpClient) { }

  getCssAllData(): Observable<any> {
    return this._http.get(this.URL_API + '/posts/');
  }

  getCssAllDataById(id: number): Observable<any> {
    return this._http.get(this.URL_API + '/posts/' + id);
  }
}
