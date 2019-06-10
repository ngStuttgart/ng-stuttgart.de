import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface TeamMember {
  name: string;
  twitterHandle: string;
  imagePath?: string;
}

@Component({
  selector: 'ng-stuttgart-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers$: Observable<TeamMember[]>;

  constructor() {
    this.teamMembers$ = of([
      {
        name: 'Florian Tischler',
        twitterHandle: '@floriantischler',
        imagePath: 'assets/profiles/florian.jpg'
      },
      {
        name: 'Marco Hämmerle',
        twitterHandle: '@marcohaemmerle',
        imagePath: 'assets/profiles/marco.jpg'
      },
      {
        name: 'Pascal Brewing',
        twitterHandle: '@DocMaboos',
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
        imagePath: 'assets/profiles/alex.jpg'
      }
    ]);
  }
}
