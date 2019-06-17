import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MEETUP_API_URL } from '../meetup.module';
import { MeetupGroup } from '../models/group.model';

@Injectable()
export class GroupService {
  /**
   * @private
   * @memberof GroupService
   */
  private urlName = 'angular-users-stuttgart';

  constructor(private readonly httpService: HttpService) {}
  /**
   * @readonly
   * @memberof GroupService
   */
  get eventApiUrl() {
    return `${MEETUP_API_URL}/${this.urlName}/events`;
  }
  /**
   * @returns
   * @memberof GroupService
   */
  fetchEvent(): Observable<MeetupGroup[]> {
    return this.httpService.get(this.eventApiUrl).pipe(
      map((eventResponse: AxiosResponse) => {
        console.log('event: ', eventResponse);
        return eventResponse.data;
      }),
      catchError(error => {
        console.error('error: ', error);
        return throwError(error);
      })
    );
  }
}
