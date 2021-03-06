import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/index';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    constructor(private auth: AuthService, private router: Router) {}

    email: string;
    password: string;

    signInWithEmail(): void {
        this.auth.signInWithEmail({
            email: this.email,
            password: this.password
        }).then(() => this.postSignIn());
    }

    private postSignIn(): void {
        this.router.navigate(['/ideas']);
    }

}
