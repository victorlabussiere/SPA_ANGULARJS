import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Environment = require('src/environments/environment')
import { Comments } from '../Comments';
import { Response } from '../Response';
import { MyPics } from '../MyPics';

const environment = new Environment('mypics/')

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  private baseApiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  createComment(data: Comments, id: number): Observable<Response<Comments>> {
    return this.http.post<Response<Comments>>(this.baseApiUrl + id + '/comments', data)
  }
}
