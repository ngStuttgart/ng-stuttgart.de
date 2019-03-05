import { Injectable, HttpService } from '@nestjs/common';
import { MEETUP_API_URL } from '../meetup.module';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { MeetupGroup } from '../models/group.model';
import { AxiosResponse } from 'axios';

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
