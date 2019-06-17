import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-stuttgart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
