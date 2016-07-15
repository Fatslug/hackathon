import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// core
import { AUTH_PROVIDERS } from './app/shared/auth/index';
import { FIREBASE_APP_PROVIDERS } from './app/shared/firebase/index';
// import { TASKS_PROVIDERS } from './app/shared/tasks';

// routes
import { ROUTER_PROVIDERS } from './app/shared/routes';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    AUTH_PROVIDERS,
    FIREBASE_APP_PROVIDERS,
    ROUTER_PROVIDERS
    // TASKS_PROVIDERS
]).catch((error: Error) => console.error(error));
