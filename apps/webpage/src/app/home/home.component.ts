import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meetup } from '../archive/archive.component';

@Component({
  selector: 'ng-stuttgart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  upcomingMeetup$: Observable<Meetup>;

  constructor() {}

  ngOnInit() {
    this.upcomingMeetup$ = of({
      date: new Date(2019, 7, 18).toJSON(),
      location: 'Campus Beach'
    });
  }
}
