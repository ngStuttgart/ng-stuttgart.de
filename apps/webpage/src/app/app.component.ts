import { Component, OnInit } from '@angular/core';
import { MediaService } from './core/media.service';

@Component({
  selector: 'ng-stuttgart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.initBreakpoints();
  }
}
