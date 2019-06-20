import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NextMeetup {
  date: string;
  location: string;
  meetupUrl: string;
}

@Component({
  selector: 'ng-stuttgart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  nextMeetup$: Observable<NextMeetup>;

  ngOnInit() {
    this.nextMeetup$ = of({
      date: new Date(2019, 7, 18).toJSON(),
      location: 'Campus Beach',
      meetupUrl:
        'https://www.meetup.com/de-DE/angular-users-stuttgart/events/262122939/'
    });
  }
}