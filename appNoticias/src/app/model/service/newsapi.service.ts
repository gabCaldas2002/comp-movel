import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum NewsFilter{
  all = '',
  business = 'business',
  entertainment = 'entertainment',
  general = 'general',
  health = 'health',
  science = 'science',
  sports = 'sports',
  technology = 'technology'
}

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  url = 'https://newsapi.org/v2/top-headlines';
  country = 'br';
  apikey = '55dd9f5d6953447b94c6a0971870becc'

  constructor(private http: HttpClient) {}

  getAll() : Observable<any>{
    return this.http.get(`${this.url}?country=${this.country}&apikey=${this.apikey}`);
  }

  getByCategory(type : NewsFilter) : Observable<any>{
    return this.http.get(`${this.url}?country=${this.country}&category=${type}&apikey=${this.apikey}`);
  }

}
 