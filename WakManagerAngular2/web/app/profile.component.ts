import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import WakandaClient from 'wakanda-client/browser/no-promise';

@Component({
    templateUrl:"app/profile.component.html"
})
@CanActivate((next) => {
    let prom  = new Promise((resolve, reject) => {
        let client = new WakandaClient();
        client.directory.currentUser().then(result => {
            userID = result.ID;
            resolve(true);
        }).catch(error => {
            resolve(false);
        })
    })
    
    return prom;
})
export class ProfileComponent {
    info = {photo:{}};
    notEditable : boolean = true;
    constructor() {
        let client = new WakandaClient();
        client.getCatalog().then(ds =>{
            console.log(userID);
            ds.Users.find(userID).then(result => {
                console.log(result.firstname);
                this.info = result;
            })
        })
    }
    save(){
        this.notEditable = true;
        let client = new WakandaClient();
        client.getCatalog().then(ds =>{
            ds.Users.edit(userID, this.info.firstname, this.info.lastname, this.info.country).then( result => {
               
            });
           
        })
    }
    logout() {
        let client = new WakandaClient();
        client.directory.logout().then(result => {
            
        })
    }
}

var userID:string;
