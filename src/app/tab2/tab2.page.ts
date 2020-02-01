import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Peliculas } from '../interfaces/peliculas.interface';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public movieList: Peliculas[] = [];
  public searching: boolean = false;
  public textoBuscar: string = '';
  public ideas: string[] = ['Spiderman', 'Avengers', 'Guason', 'El señor de los anillos', 'Wolverine'];

  constructor(
    private movieSerive: MoviesService,
    private modalCtrl: ModalController
  ) {}

  buscar(event: any) {
    this.searching = true;
    const value = event.detail.value;

    if (value !== '') {
      this.movieSerive.searchMovie(value).subscribe( (res: any) => {
        this.movieList = res.results;
        this.searching = false;
      });
    } else {
      this.searching = false;
      this.movieList = [];
    }
  }

  async  verDetalleModal(movieId: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        movieId
      }
    });

    modal.present();
  }

}
