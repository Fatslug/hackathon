import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth-service';
import { AppHeader } from './app-header/app-header.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [AppHeader]
})

export class AppComponent {
    constructor(private auth: AuthService) {}

    signOut(): void {
        this.auth.signOut();
        window.location.replace('/');
    }
}
