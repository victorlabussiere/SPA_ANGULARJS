import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Response } from '../Response';
import { MyPics } from '../MyPics';
const Environments = require('../../environments/environment')

@Injectable({
  providedIn: 'root'
})

export class MypicsService {

  public apiUrl = new Environments('mypics').apiUrl

  constructor(private http: HttpClient) { }

  getPics(): Observable<Response<MyPics[]>> {
    return this.http.get<Response<MyPics[]>>(this.apiUrl)
  }

  getPicById(id: number): Observable<Response<MyPics>> {
    const url: string = `${this.apiUrl}/${id}`
    return this.http.get<Response<MyPics>>(url)
  }

  createPic(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  removePic(id: number) {
    const url: string = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }
}
