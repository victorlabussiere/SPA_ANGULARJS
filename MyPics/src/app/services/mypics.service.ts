import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MypicsService {

  private baseApiUrl:string = 'http://localhost:3333/'
  private apiUrl:string = `${this.baseApiUrl}api/mypics`

  constructor( private http:HttpClient) { }

  createPic (formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }
}
