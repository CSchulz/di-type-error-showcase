import {NgModule} from '@angular/core';
import {TestComponent} from './test-component';
import {ServiceA} from 'app/test/service-a';

@NgModule({
  declarations: [
    TestComponent,
  ],
  entryComponents: [TestComponent,],
  providers: [ServiceA],
})
export class TestModule {}
