import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeChangeService } from './theme-change.service';

@Component({
  selector: 'ng-stuttgart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private service: ThemeChangeService) {}
}
