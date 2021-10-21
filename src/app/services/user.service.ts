import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loginUser(credentials){}

  registerUser(credentials){
    return new Promise((resolve, reject) => {
      if(credentials) {
        resolve({code: 200});
      } else{
        reject({code:404});
      }
    });
  }
}
