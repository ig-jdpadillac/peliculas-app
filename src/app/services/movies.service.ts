import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }


  public getFeature(): Observable<Respuesta> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<Respuesta>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2020-01-01&api_key=dd67162a2b4ffb68267a204a4ec24d18&language=es&include_image_language');
  }
}
