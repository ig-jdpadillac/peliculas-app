import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/respuesta.interface';
import { environment } from 'src/environments/environment';
import { RespuestaCredits } from '../interfaces/credits.interface';
import { PeliculaDetalle } from '../interfaces/peliculaDetalleinterface';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage: number = 0;
  public generos: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  private ejecutarquery(query: string) {
    query = environment.url + query;

    query += environment.apyKey + '&language=es&include_image_language';
    console.log(query);
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
    return this.ejecutarquery(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }



  public getPopulares(): Observable<Respuesta> {
    this.popularesPage++;
    const query: string = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarquery(query);
  }

  getDetallePelicula(peliculasId: string): Observable<any> {
    return this.ejecutarquery(`/movie/${peliculasId}?a=1`);
  }


  getActoresPelicula(peliculasId: string): Observable<any> {
    return this.ejecutarquery(`/movie/${peliculasId}/credits?a=1`);
  }

  searchMovie(termino: string) {
    return this.ejecutarquery(`/search/movie?query=${termino}`);
  }

  cargarGeneros(): Promise<any> {
    return new Promise(resolve => {
      this.ejecutarquery('/genre/movie/list?a=1')
      .subscribe( res => {
        // tslint:disable-next-line: no-string-literal
        this.generos = res['genres'];
        console.log(this.generos);
        resolve(this.generos);
      });
    });


  }
}
