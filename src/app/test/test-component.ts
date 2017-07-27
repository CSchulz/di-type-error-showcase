import {Component} from '@angular/core';
import {AbstractComponent} from './abstract-component';
import {ServiceA} from './service-a';

@Component({
  template: 'test',
})
export class TestComponent extends AbstractComponent {
  constructor(private _serviceA: ServiceA) {
    super();
  }
}
