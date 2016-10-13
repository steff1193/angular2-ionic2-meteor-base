import { Component, OnInit } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';

import { DemoDataService } from './demo-data.service';
import { DemoDataObject } from '../../../../both/models/demo-data-object';

import template from './demo.component.html';

@Component({
  selector: 'demo',
  template
})
export class DemoComponent implements OnInit {
  greeting: string;
  // NOT A PROBLEM IF USING A HARDCODED ARRAY WITHOUT ASYNC
  // data: any[];
  data: Observable<DemoDataObject[]>;

  constructor(private demoDataService: DemoDataService) {
    this.greeting = 'Hello Demo Component!';
  }

  ngOnInit() {
    // NOT A PROBLEM IF USING A HARDCODED ARRAY WITHOUT ASYNC
    // this.data = [{name: "Dotan", age: 25}, {name: "Liran", age: 26}, {name: "Uri", age: 30}];
    this.data = this.demoDataService.getData().zone();
  }
}
