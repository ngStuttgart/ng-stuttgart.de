import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-stuttgart-side-tile',
  templateUrl: './side-tile.component.html',
  styleUrls: ['./side-tile.component.scss']
})
export class SideTileComponent implements OnInit {
  date: Date;
  host: string;

  constructor() {
    this.date = new Date(2019, 3, 28);
    this.host = 'Bosch';
  }

  ngOnInit() {}
}
