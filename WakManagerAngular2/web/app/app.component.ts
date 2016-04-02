import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import WakandaClient from 'wakanda-client/browser/no-promise';
import {LoginComponent} from './login.component';
import {ProfileComponent} from './profile.component';
import {RegisterComponent} from './register.component';

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/login',   name: 'Login', component: LoginComponent, useAsDefault: true},
  {path: '/register',   name: 'Register', component: RegisterComponent},
  {path: '/profile',   name: 'Profile', component: ProfileComponent}
])
export class AppComponent {
}
