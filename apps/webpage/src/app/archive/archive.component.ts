import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Talk {
  title: string;
  author: string;
  slidesUrl?: string;
  description?: string;
}

export interface Meetup {
  date: string;
  location: string;
  talks?: Talk[];
}

interface MeetupViewModel {
  meetups: Meetup[];
  selectedMeetup: Meetup;
  selectedMeetupIndex: number;
}

@Component({
  selector: 'ng-stuttgart-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveComponent implements OnInit {
  meetups$: Observable<Meetup[]>;
  meetupSelectedAction = new BehaviorSubject<number>(0);
  selectedMeetupIndex$: Observable<number> = this.meetupSelectedAction.asObservable();
  selectedMeetup$: Observable<Meetup>;
  vm$: Observable<MeetupViewModel>;

  selectMeetup(index: number) {
    this.meetupSelectedAction.next(index);
  }

  constructor() {}

  ngOnInit() {
    this.meetups$ = of([
      {
        date: new Date(2019, 6, 5).toJSON(),
        location: 'Bosch',
        talks: [
          {
            title: "What's new in Angular 8",
            author: 'David Muellerchen',
            slidesUrl:
              'https://docs.google.com/presentation/d/1VsCWy9Z4pztnXWdf95T6bqt9N-0cJOyRImR9a6EBN7s/present?slide=id.p'
          },
          {
            title: 'Improving UX by performance with Angular',
            author: 'Steffen Stähle & Florian Tischler',
            slidesUrl:
              'https://drive.google.com/file/d/1BMMSLjwOg04pZo7WBvykwgbdYIoFO9Bu/view'
          }
        ]
      },
      {
        date: new Date(2019, 4, 25).toJSON(),
        location: 'Mercedes-Benz.io',
        talks: [
          {
            title: 'Refactorable reactive forms in Angular',
            author: 'Sascha Engmann',
            slidesUrl:
              'https://docs.google.com/presentation/d/1LJhLThrdnyO3fWfWJFv13oVQWhyZBkw7UqIgRw3ippM/edit?usp=sharing'
          },
          {
            title: 'Intrinsic Web Design',
            author: 'Alexander Schuster',
            slidesUrl:
              'https://docs.google.com/presentation/d/1Fl0_1iR_FYR97DmQCjAEyuUMuJYjJqq4AcCugryCTwU/edit?usp=sharing'
          }
        ]
      },
      {
        date: new Date(2019, 3, 28).toJSON(),
        location: 'Bosch',
        talks: [
          {
            title: 'Identity & Access Management Made Easy',
            author: 'Mathias Conradt',
            slidesUrl:
              'https://cloud.techtical.io/index.php/s/yHQ6LC2LYLn44AT#pdfviewer'
          },
          {
            title: 'NativeScript LiveCoding Session: The NgStuttgartApp',
            author: 'Pascal Bayer',
            slidesUrl:
              'https://docs.google.com/presentation/d/1kE6YlTBMJNb2_zR2sc4WXk39DHAZrJqyGQxsGNcoY7c/edit#slide=id.p'
          },
          {
            title: 'Angular 8 Preview',
            author: 'Florian Tischler'
          }
        ]
      },
      {
        date: new Date(2019, 2, 7).toJSON(),
        location: 'Novatec',
        talks: [
          {
            title:
              'Architectures for huge Angular based enterprise applications: npm Packages, Monorepos and Micro Apps',
            author: 'Manfred Steyer'
          },
          {
            title: "RxJS Let's play",
            author: 'David Muellerchen'
          },
          {
            title: 'Authentication in Angular with OAuth2/OIDC',
            author: 'Andreas Falk',
            slidesUrl: 'https://andifalk.github.io/oidc-client-server/#/'
          }
        ]
      },
      {
        date: new Date(2018, 12, 13).toJSON(),
        location: 'Computer Futures',
        talks: [
          {
            title: 'Boost up your component development',
            author: 'Mitko Tschimev'
          },
          {
            title: 'NestJS with Angular & Server Side Rendering',
            author: 'Pascal Bayer'
          },
          {
            title: 'AngularConnect Review',
            author: 'Florian Tischler'
          }
        ]
      },
      {
        date: new Date(2018, 11, 20).toJSON(),
        location: 'Porsche',
        talks: [
          {
            title:
              'Scalable logic between different applications like never before',
            author: 'Mitko Tschimev'
          },
          {
            title: 'Native apps on web and mobile',
            author: 'Pascal Bayer',
            slidesUrl:
              'https://docs.google.com/presentation/d/1Z4IP-R6iOlBEyISMVLaJ_W_7JElC6XdKGZCcpLLtCt4/edit#slide=id.p'
          },
          {
            title: 'The Angular CLI and its features',
            author: 'David Müllerchen'
          }
        ]
      },
      {
        date: new Date(2018, 10, 18).toJSON(),
        location: 'Kaiser X Labs',
        talks: [
          {
            title: 'Angular Testing mit Jest',
            author: 'Sebastian Krüger'
          },
          {
            title: 'CSS Grid',
            author: 'Alexander Schuster',
            slidesUrl:
              'https://docs.google.com/presentation/d/1HiY8hcepagCVFQa3oAIKM9LeD0bnwbOteiMdcf5KTiI/edit?usp=sharing'
          },
          {
            title: 'Angular 7 (Preview)',
            author: 'Florian Tischler'
          }
        ]
      },
      {
        date: new Date(2018, 7, 26).toJSON(),
        location: 'Adam Riese',
        talks: [
          {
            title: 'PWAs mit Angular und Angular ServiceWorker',
            author: 'Pascal Bayer',
            slidesUrl:
              'https://docs.google.com/presentation/d/1znMKn5Q1BzaYNb3ZUgfVoFObrj3E0bT3ZP91AJVnsHc/edit'
          },
          {
            title: 'Ausblick auf Angular 6.1',
            author: 'Florian Tischler',
            slidesUrl:
              'https://docs.google.com/presentation/d/1scxNwV1Pv_A2OzARMcsbpWIPZBzL10WKX_plzfzyBTw/edit#slide=id.p'
          }
        ]
      },
      {
        date: new Date(2018, 5, 17).toJSON(),
        location: 'M-Way Solutions',
        talks: [
          {
            title: "What's new in Angular 6",
            author: 'Florian Tischler',
            slidesUrl:
              'https://docs.google.com/presentation/d/1OPEKbg-Ht_Y2x642nQaFPZ5AKg3NFuVHDTXDDemYHf8/edit#slide=id.p'
          }
        ]
      },
      {
        date: new Date(2017, 12, 21).toJSON(),
        location: 'PMC Services',
        talks: [
          {
            title: 'Frontend Design Frameworks',
            author: 'Florian Tischler',
            slidesUrl:
              'https://docs.google.com/presentation/d/1rH_Sh5xWOVMCMKOOPQnpqpROcF0T7rQIu7BMow3XJYE/edit#slide=id.p'
          }
        ]
      }
    ]);

    this.selectedMeetup$ = combineLatest([this.meetups$, this.selectedMeetupIndex$]).pipe(
      map(([meetups, selectedIndex]: [Meetup[], number]) => meetups[selectedIndex])
    );

    this.vm$ = combineLatest([this.meetups$, this.selectedMeetup$, this.selectedMeetupIndex$]).pipe(
      map(([meetups, selectedMeetup, selectedMeetupIndex]) => ({meetups, selectedMeetup, selectedMeetupIndex}))
    );
  }
}
