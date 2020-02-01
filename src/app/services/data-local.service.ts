import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from 'src/app/interfaces/peliculaDetalleinterface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  public peliculas: PeliculaDetalle[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  guardarPelicula(pelicula: PeliculaDetalle) {
    let existe: boolean = false;
    let mensaje: string = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Pelicula eliminada de favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Pelicula agregada a favoritos';

    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
  }
}
