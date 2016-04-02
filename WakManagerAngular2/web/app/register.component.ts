import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import { FORM_DIRECTIVES } from 'angular2/common';
import WakandaClient from 'wakanda-client/browser/no-promise';

@Component({
    templateUrl:"app/register.component.html",
    directives: [FORM_DIRECTIVES]
})
export class RegisterComponent {
}