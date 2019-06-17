import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NextMeetup } from '../home.component';

@Component({
  selector: 'ng-stuttgart-side-tile',
  templateUrl: './side-tile.component.html',
  styleUrls: ['./side-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideTileComponent {
  @Input() nextMeetup: NextMeetup;

  constructor() {}
}
