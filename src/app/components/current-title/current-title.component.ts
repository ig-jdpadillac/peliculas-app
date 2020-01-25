import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-title',
  templateUrl: './current-title.component.html',
  styleUrls: ['./current-title.component.scss'],
})
export class CurrentTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
