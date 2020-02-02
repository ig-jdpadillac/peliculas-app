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
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos =  await this.movieService.cargarGeneros();
    console.log(this.peliculas);
    this.pelisPorGenero(this.peliculas, this.generos);
  }

  pelisPorGenero(peliculas: PeliculaDetalle[], generos: Genre[]) {

    

  }

}
