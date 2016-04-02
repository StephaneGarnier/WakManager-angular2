import {Page, NavController} from 'ionic-angular';
import {AccountIonicPage} from '../account/account';

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginIonicPage {
    email: string;
    password: string;
  constructor(private _nav: NavController) {

  }
  
  login() {
      let client = new WakandaClient();
      let nav = this._nav;
      console.log(client);
         client.directory.login(this.email, this.password).then(function(result){
             console.log(result);
             nav.push(AccountIonicPage);
         }).catch(function(error){
             console.log(error);
         });      
  }
}