import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dfm-loading',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  @Input() show = false;
  constructor() {}

  ngOnInit() {}
}
