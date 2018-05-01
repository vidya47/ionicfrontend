import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*let apiUrl='http://localhost:3000/';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  isLoggedIn: boolean;
  AuthToken: null;
  token: any;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
    this.isLoggedIn = false;
    this.AuthToken = null;

  }

  /*postData(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-type', 'application/x-www-form-urlencoded');

      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).subscribe(res => {
        if(res => res.json().success)
          resolve(true);
      }, (err) => {
        reject(err);
      });
    });
  } */

  storeUserCredentials(token){
    window.localStorage.setItem('vijay', token);
    this.useCredentials(token);
  }

  useCredentials(token) {
    this.isLoggedIn = true;
    this.AuthToken = token;
  }

  loadUserCredentials(){
    var token = window.localStorage.getItem('vijay');
    this.useCredentials(token);
  }

  destroyUserCredentials(){
    this.isLoggedIn = false;
    this.AuthToken = null;
    window.localStorage.clear();
  }

  authenticate(user){
    var creds = "name" + user.name + "&password=" + user.password;
    var headers = new HttpHeaders();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post('https://ionicback.herokuapp.com/authenticate', creds, {headers: headers})
      .subscribe(data => {
        if(data){
          this.token = data['token'];
          this.storeUserCredentials(this.token);
          resolve(true);
        } else
          resolve(false);
    });
  });

}

adduser(user){
  var creds = "name" + user.name + "&password=" + user.password;
  var headers = new HttpHeaders();
  //headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Content-Type', 'application/json');
  return new Promise(resolve => {
    this.http.post('https://ionicback.herokuapp.com/adduser', creds, {headers: headers})
    .subscribe(data => {
      if(data){
        resolve(true);
      } else
        resolve(false);
  });
});

}
getinfo(){
  var headers = new HttpHeaders();
  //headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Authorization', 'Bearer ' + this.AuthToken);
  return new Promise(resolve => {
    this.http.get('https://ionicback.herokuapp.com/getinfo', {headers: headers}).subscribe(data => {
      if(data){
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

logout(){

}

}
