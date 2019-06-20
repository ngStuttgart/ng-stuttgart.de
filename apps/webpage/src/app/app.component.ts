import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UpdateService } from './update.service';

@Component({
  selector: 'ng-stuttgart-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private updateService: UpdateService) {}
}
