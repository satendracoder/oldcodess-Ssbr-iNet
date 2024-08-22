import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsTutorialService {

  BaseUrl = "https://dummyjson.com/";

  constructor(private _http: HttpClient) { }

  jsGetData(): Observable<any> {
    return this._http.get(this.BaseUrl + 'posts');
  }

  jsGetDatById(id: number): Observable<any> {
    return this._http.get(this.BaseUrl + 'posts/' + id)
  }
}
