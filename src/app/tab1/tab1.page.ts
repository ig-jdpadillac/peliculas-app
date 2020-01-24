import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Peliculas[] = [];
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.moviesService.getFeature().subscribe( res => {
      this.peliculasRecientes = res.results;
    });
  }


}
