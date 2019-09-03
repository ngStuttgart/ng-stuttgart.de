import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface TeamMember {
  name: string;
  twitterHandle: string;
  company?: string;
  imagePath?: string;
}

@Component({
  selector: 'ng-stuttgart-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  teamMembers$: Observable<TeamMember[]>;

  constructor() {
    this.teamMembers$ = of([
      {
        name: 'Florian Tischler',
        twitterHandle: '@floriantischler',
        company: 'NemoContra GmbH',
        imagePath: 'assets/profiles/florian.jpg'
      },
      {
        name: 'Marco Hämmerle',
        twitterHandle: '@marcohaemmerle',
        company: 'NemoContra GmbH',
        imagePath: 'assets/profiles/marco.jpg'
      },
      {
        name: 'Pascal Brewing',
        twitterHandle: '@DocMaboos',
        company: 'Mercedes-Benz.io',
        imagePath: 'assets/profiles/pascal_brewing.jpg'
      },
      {
        name: 'Pascal Bayer',
        twitterHandle: '@PascalBayer',
        imagePath: 'assets/profiles/pascal_bayer.jpg'
      },
      {
        name: 'Alexander Schuster',
        twitterHandle: '@heyitsalex86',
        company: 'Allianz',
        imagePath: 'assets/profiles/alex.jpg'
      }
    ]);
  }
}
