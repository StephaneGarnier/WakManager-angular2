import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/account/account.html'
})
export class AccountIonicPage {
  info = {};
  constructor() {
        let client = new WakandaClient();
        client.directory.currentUser().then(result => {
           client.getCatalog().then(ds =>{
            console.log(result.ID);
            ds.Users.find(result.ID).then(result => {
                this.info = result;
            })
        })
        }).catch(error => {
           console.log(error);
        })     
  }
}