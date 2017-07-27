import { Component } from '@angular/core';
import {ServiceA} from './test/service-a';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _service: ServiceA) {}
}
