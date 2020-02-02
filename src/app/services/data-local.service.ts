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
  ) {
    this.cargarFavoritos();
  }

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

    console.log('Existe', existe);

    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id)
      mensaje = 'Pelicula eliminada de favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Pelicula agregada a favoritos';

    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
    return !existe;
  }

  async cargarFavoritos(): Promise<PeliculaDetalle[]> {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePeliula(id: any) {
    id = Number(id);

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id);
    return (existe) ?  true : false;
  }
}
