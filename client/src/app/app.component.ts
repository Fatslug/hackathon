import { Component } from '@angular/core';
import { LoginComponent } from './login';
import { IdeaSubmissionComponent } from './idea-submission';
import { IdeasListComponent } from './ideas-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LoginComponent, IdeaSubmissionComponent, IdeasListComponent]
})
export class AppComponent {
    title = 'Hackathon 2.0';
}
