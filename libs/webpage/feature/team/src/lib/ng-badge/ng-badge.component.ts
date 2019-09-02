import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ng-stuttgart-ng-badge',
  templateUrl: './ng-badge.component.html',
  styleUrls: ['./ng-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgBadgeComponent {
  @Input() name: string;
  @Input() twitter: string;
  @Input() company: string;
  @Input() image: string;
}
