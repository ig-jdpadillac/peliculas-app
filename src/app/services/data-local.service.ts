import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from 'src/app/interfaces/peliculaDetalleinterface';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  public peliculas: PeliculaDetalle[] = [];

  constructor(
    private storage: Storage
  ) { }


  guardarPelicula(pelicula: PeliculaDetalle) {
    this.peliculas.push(pelicula);

    this.storage.set('peliculas', this.peliculas);

  }
}
