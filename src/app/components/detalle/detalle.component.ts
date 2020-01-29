import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle } from 'src/app/interfaces/peliculaDetalleinterface';
import { RespuestaCredits, Cast } from '../../interfaces/credits.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnChanges, OnInit {

  @Input() movieId: string;
  public pelicula: PeliculaDetalle = new Object();
  public actores: Cast[] = [];
  public oculto: number = 150;

  slideActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(
    private moviesService: MoviesService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getDetalle();
    this.getActores();
  }

  ngOnChanges() {
    this.getDetalle();
    this.getActores();
  }


  getDetalle() {
    this.moviesService.getDetallePelicula(this.movieId).subscribe( (res: PeliculaDetalle) => {
      this.pelicula = res;
    });
  }

  getActores() {
    this.moviesService.getActoresPelicula(this.movieId).subscribe( (res: RespuestaCredits) => {
      this.actores = res.cast;
    });
  }

  guardarFavrito() {
  }

  regresar() {
    this.modalController.dismiss();
  }



}
