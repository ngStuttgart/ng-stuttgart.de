import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

interface TeamMember {
  name: string;
  twitter: string;
  image?: string;
}

@Component({
  selector: 'ng-stuttgart-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers$: Observable<TeamMember[]>;

  constructor() {
    this.teamMembers$ = of([
      {
        name: 'Florian Tischler',
        twitter: '@floriantischler',
        image: 'assets/profiles/25cf5a1c29a3d81d09b3c29a8ffad66b.png'
      },
      {
        name: 'Marco Hämmerle',
        twitter: '@marcohaemmerle',
        image: 'assets/profiles/197b3c0a7032750d5b1769c75d45f71b.png'
      },
      {
        name: 'Pascal Brewing',
        twitter: '@DocMaboos',
        image: 'assets/profiles/eaabfc300beb14a1257d6ba9326bb09a.png'
      },
      {
        name: 'Pascal Bayer',
        twitter: '@PascalBayer',
        image: 'assets/profiles/c5b8e259d9332bc0a9f3e7f4e936245a.png'
      },
      {
        name: 'Alexander Schuster',
        twitter: '@heyitsalex86',
        image: 'assets/profiles/MVIMG_20180618_162813.jpg'
      }
    ]);
  }

  ngOnInit() {}
}
