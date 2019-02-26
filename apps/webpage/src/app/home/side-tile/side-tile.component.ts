import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-stuttgart-side-tile',
  templateUrl: './side-tile.component.html',
  styleUrls: ['./side-tile.component.scss']
})
export class SideTileComponent implements OnInit {

  date;
  host: string;

  constructor() { }

  ngOnInit() {
  }

}
