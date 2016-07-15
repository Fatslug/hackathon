import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { AuthGuard } from './auth/auth-guard';
import { UnauthGuard } from './auth/unauth-guard';
import { LoginComponent } from '../login';
import { Ideas } from '../ideas/ideas.component';


const routes: RouterConfig = [
    {path: '', component: LoginComponent, canActivate: [UnauthGuard]},
    {path: 'ideas', component: Ideas, canActivate: [AuthGuard]}
];


export const ROUTER_PROVIDERS = [
    provideRouter(routes),
    {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
