import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export type EArBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Its to get our breakpoints
 * ````
 * // quick example
 constructor(private mediaService: MediaService) { }
 ngOnInit() {
      this.isMobile = this.mediaService.checkMobile();
      const myBreakPoint = this.mediaService.breakpoint
      this.mobileSubcription = this.mediaService.breakpoints.subscribe(() => {
        this.isMobile = this.mediaService.checkMobile();
      });
    }
 ````
 * @export
 * @class MediaService
 */
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  /**
   * @type {breakpoints}
   * @memberof MediaService
   */
  public breakpoint: EArBreakpoints;

  /**
   * @memberof MediaService
   */
  private breakpointSizes = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  };
  private stateEmitter = new EventEmitter(true);

  /**
   * @readonly
   * @type {number}
   * @memberof MediaService
   */
  get windowHeight(): number {
    return window.innerHeight;
  }

  /**
   * @readonly
   * @type {number}
   * @memberof MediaService
   */
  get windowWidth(): number {
    return window.innerWidth;
  }

  /**
   * Breakpoint: px
   * xs: 0,
   * sm: 576px
   * md: 768px
   * lg: 992px
   * xl: 1200px
   *
   * @readonly
   * @type {Observable<EArBreakpoints>}
   * @memberof MediaService
   */
  get breakpoints(): Observable<EArBreakpoints> {
    return this.stateEmitter.pipe(
      map((change: EArBreakpoints) => {
        this.breakpoint = change ? change : this.breakpoint;
        return this.breakpoint;
      })
    );
  }

  /**
   * we add once time the listener to the mediaquerySensor for each breakpoint
   * its still loaded in the app.component don`t load it twice
   * @memberof MediaService
   */
  initBreakpoints() {
    const keys = Object.keys(this.breakpointSizes);
    const queries = [];
    keys.forEach((key: EArBreakpoints, index) => {
      const action = event => {
        if (event.matches) {
          this.stateEmitter.emit(key);
        }
      };
      let query = `(max-width: ${this.breakpointSizes.sm - 1}px)`;
      if (key !== 'xs' && key !== 'xl') {
        query = `(min-width: ${this.breakpointSizes[key]}px) and (max-width: ${this.breakpointSizes[keys[index + 1]]}px)`;
      } else if (key === 'xl') {
        query = `(min-width: ${this.breakpointSizes[key]}px)`;
      }
      const matcher = window.matchMedia(query);
      queries.push({
        matcher: matcher,
        key: key
      });
      matcher.addListener(action.bind(this));
    });
    const initialSize = queries.filter(matcher => matcher.matcher.matches);
    if (initialSize.length) {
      this.breakpoint = initialSize[0].key;
    }
  }

  /**
   * @param {EArBreakpoints} alias
   * @returns <number | undefined>
   * @memberof MediaService
   */
  private sizeByAlias(alias: EArBreakpoints) {
    return this.breakpointSizes[alias] ? this.breakpointSizes[alias] : undefined;
  }

  /**
   * @param {string} alias
   * @returns
   * @memberof MediaService
   */
  public checkMobile() {
    return ['xs', 'sm'].indexOf(this.breakpoint) !== -1;
  }
}
