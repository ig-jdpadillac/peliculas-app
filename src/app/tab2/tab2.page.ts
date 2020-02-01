import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public textoBuscar: string = '';
  public ideas: string[] = ['Spiderman', 'Avengers', 'Guason', 'El señor de los anillos', 'Wolverine'];

  constructor() {}

  buscar(event: any) {
    const value = event.detail.value;
    console.log(value);
  }

}
