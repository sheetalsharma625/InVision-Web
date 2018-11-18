import { Component, OnInit, Input } from '@angular/core';

import { Switch } from '../model/switch';
import { SwitchService } from '../service/switch.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {

  @Input() switch: Switch;

  constructor(private switchService: SwitchService) { }

  ngOnInit() {
  }

  changeSwitchState(sw: Switch) {
    sw.state = sw.state === "ON" ? "OFF" : "ON";
    this.switchService.updateSwitchState(sw).subscribe();
  }

}
