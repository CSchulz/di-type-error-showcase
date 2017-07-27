import {Injectable, Type} from '@angular/core';
import {AbstractComponent} from './abstract-component';

@Injectable()
export class ServiceB {
  public open(content: Type<AbstractComponent>): void {

  }
}
