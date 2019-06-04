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
        imagePath: 'assets/profiles/25cf5a1c29a3d81d09b3c29a8ffad66b.png'
      },
      {
        name: 'Marco Hämmerle',
        twitterHandle: '@marcohaemmerle',
        imagePath: 'assets/profiles/197b3c0a7032750d5b1769c75d45f71b.png'
      },
      {
        name: 'Pascal Brewing',
        twitterHandle: '@DocMaboos',
        imagePath: 'assets/profiles/eaabfc300beb14a1257d6ba9326bb09a.png'
      },
      {
        name: 'Pascal Bayer',
        twitterHandle: '@PascalBayer',
        imagePath: 'assets/profiles/c5b8e259d9332bc0a9f3e7f4e936245a.png'
      },
      {
        name: 'Alexander Schuster',
        twitterHandle: '@heyitsalex86',
        imagePath: 'assets/profiles/MVIMG_20180618_162813.jpg'
      }
    ]);
  }
}
