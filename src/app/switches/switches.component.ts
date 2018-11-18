import { Component, OnInit } from '@angular/core';

import { Switch } from '../model/switch'
import { SwitchService } from '../service/switch.service'

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.less']
})
export class SwitchesComponent implements OnInit {

  switches: Switch[];

  constructor(private switchService: SwitchService) { }

  ngOnInit() {
    this.getSwitches();
  }

  getSwitches(): void {
    this.switchService.getSwitches()
      .subscribe(switches => this.switches = switches);
  }
}
