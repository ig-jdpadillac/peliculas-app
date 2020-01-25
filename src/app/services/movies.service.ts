import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/respuesta.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  private ejecutarquery(query: string) {
    query = environment.url + query;

    query += environment.apyKey + '&language=es&include_image_language';
    console.log(query)

    return this.http.get<Respuesta>(query);
  }


  public getFeature(): Observable<Respuesta> {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString: any;

    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }


    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    return this.ejecutarquery(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`)
  }
}
