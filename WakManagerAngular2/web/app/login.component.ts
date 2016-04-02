import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import WakandaClient from 'wakanda-client/browser/no-promise';

@Component({
    templateUrl: "app/login.component.html"
})
export class LoginComponent {
    userPassword: string;
    userId: string;
    
    constructor(private _router: Router, routeParams: RouteParams){
        
        //let client = new WakandaClient();
        //console.log(client);
    }
    onClick() { 
        //console.log(this.userId); 
        let router = this._router;
         let client = new WakandaClient();
         client.directory.login(this.userId, this.userPassword).then(function(result){
             console.log(result);
             router.navigate( ['Profile'] );
         });
         
    }
}
