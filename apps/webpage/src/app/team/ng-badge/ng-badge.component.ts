import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-stuttgart-ng-badge',
  templateUrl: './ng-badge.component.html',
  styleUrls: ['./ng-badge.component.scss']
})
export class NgBadgeComponent implements OnInit {
  @Input() name: string;
  @Input() twitter: string;
  @Input() image: string;

  constructor() {}

  ngOnInit() {}
}