import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-stuttgart-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() {}
}
