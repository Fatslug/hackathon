import { Component } from '@angular/core';
import { AngularTestComponent } from './angular-test';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AngularTestComponent]
})
export class AppComponent {
    title = 'app works!';
}
