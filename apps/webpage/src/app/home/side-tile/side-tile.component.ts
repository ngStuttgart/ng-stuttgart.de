import { Component, Input } from '@angular/core';
import { Meetup } from '../../archive/archive.component';

@Component({
  selector: 'ng-stuttgart-side-tile',
  templateUrl: './side-tile.component.html',
  styleUrls: ['./side-tile.component.scss']
})
export class SideTileComponent {
  @Input() meetup: Meetup;

  constructor() {}
}
