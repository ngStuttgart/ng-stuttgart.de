import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { UpdateService } from './update.service';

@Component({
  selector: 'ng-stuttgart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(private updateService: UpdateService) {}
}
