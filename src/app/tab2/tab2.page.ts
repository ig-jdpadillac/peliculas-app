import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public textoBuscar: string = '';
  public ideas: string[] = ['Spiderman', 'Avengers', 'Guason', 'El señor de los anillos', 'Wolverine'];

  constructor(
    private movieSerive: MoviesService
  ) {}

  buscar(event: any) {
    const value = event.detail.value;

    if (value !== '') {
      this.movieSerive.searchMovie(value).subscribe( res => {
        console.log(res);
      });
    }
  }

}
