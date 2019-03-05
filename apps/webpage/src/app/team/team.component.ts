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
      },
      {
        name: 'Marco Hämmerle',
        twitter: '@marcohaemmerle'
      },
      {
        name: 'Pascal Brewing',
        twitter: '@DocMaboos'
      },
      {
        name: 'Pascal Bayer',
        twitter: '@PascalBayer'
      },
      {
        name: 'Alexander Schuster',
        twitter: '@heyitsalex86'
      }
    ]);
  }

  ngOnInit() {}
}
