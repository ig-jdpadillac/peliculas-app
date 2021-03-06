import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Peliculas } from '../interfaces/peliculas.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public peliculasRecientes: Peliculas[] = [];
  public populares: Peliculas[] = [];


  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getFeature().subscribe(res => {
      this.peliculasRecientes = res.results;
    });
    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe(resp => {
      this.populares.push(...resp.results);
      const arraTemp: any[] = [...this.populares, ...resp.results];
      this.populares = arraTemp;
    });
  }

  cargarMas() {
    this.getPopulares();
  }


}
