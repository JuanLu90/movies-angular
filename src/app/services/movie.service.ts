import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=f1eb0fddb91524fcb1e67860576e0d66&';

  constructor(private _http: HttpClient) {
    console.log('Connected to API movies');
  }


  moviesTheaters(): any {
    // let date = new Date();
    // let dateLastMonth = new Date();
// tslint:disable-next-line: max-line-length
    return this._http.get(`${this.apiUrl}discover/movie${this.apiKey}primary_release_date.gte=2019-06-04&primary_release_date.lte=2019-07-04&apiKey`);
  }

  movie(id: number){
    return this._http.get(`${this.apiUrl}movie/${id}${this.apiKey}`);
  }

  // private formatdate() {
  //   return formatDate
  // }


}
