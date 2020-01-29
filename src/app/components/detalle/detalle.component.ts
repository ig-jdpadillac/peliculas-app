import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnChanges, OnInit {

  @Input() movieId: string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    console.log(this.movieId);
    this.getDetalle();
    this.getActores();
  }

  ngOnChanges() {
    this.getDetalle();
    this.getActores();
  }


  getDetalle() {
    this.moviesService.getDetallePelicula(this.movieId).subscribe( res => {
    });
  }

  getActores() {
    this.moviesService.getActoresPelicula(this.movieId).subscribe( res => {
    });
  }




}
