import { Component, OnInit, Input } from '@angular/core';

import { Switch } from '../model/switch';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {

  @Input() switch: Switch;

  constructor() { }

  ngOnInit() {
  }

}
