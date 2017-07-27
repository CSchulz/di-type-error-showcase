import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TestComponent} from './test-component';
import {ServiceB} from './service-b';

@Injectable()
export class ServiceA {
  constructor(private _serviceB: ServiceB) {}

  public closeShift(): void {
    Observable.of(true).subscribe(
      () => this._serviceB.open(TestComponent),
      () => this._serviceB.open(TestComponent),
    );
  }
}
