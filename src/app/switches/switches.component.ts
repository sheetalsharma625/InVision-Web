import { Component, OnInit } from '@angular/core';

import { Switch } from '../model/switch'

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.less']
})
export class SwitchesComponent implements OnInit {

  switches: Switch[] = [
    { text: 'One', color: 'lightgreen' },
    { text: 'Two', color: 'lightgreen' },
    { text: 'Three', color: 'lightpink' },
    { text: 'Four', color: 'lightpink' },
    { text: 'Five', color: 'lightpink' },
  ];

  constructor() { }

  ngOnInit() {

  }

}
