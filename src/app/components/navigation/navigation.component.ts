import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { NavigationItem } from './navigation-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  @Input() navigationItems: NavigationItem[];
  navOptions =
  [
    {
      name: 'Clients Accounts',
      path: ''
    }
  ]

  constructor() {}

  ngOnInit() {}
}
