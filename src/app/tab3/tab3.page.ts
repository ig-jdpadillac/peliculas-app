import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle } from 'src/app/interfaces/peliculaDetalleinterface';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';
import { Genre } from '../interfaces/peliculaDetalleinterface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];
  public generos: Genre[] = [];

  public favList: any[] = [];

  constructor(
    private dataLocal: DataLocalService,
    private movieService: MoviesService
  ) {}

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos =  await this.movieService.cargarGeneros();
    this.pelisPorGenero(this.peliculas, this.generos);
  }

  pelisPorGenero(peliculas: PeliculaDetalle[], generos: Genre[]) {

    this.favList = [];

    generos.forEach((genero, i) => {
      this.favList.push({
        genero: genero.name,
        pelis: peliculas.filter(peli => {
          return peli.genres.find( genre => genre.id === genero.id );
        })
      });
    });
  }

}
