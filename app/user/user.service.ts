import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {
    private _loggedIn = false;
    private apiUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: Http){
        this._loggedIn = !!localStorage.getItem('auth_token');
    }

    login(username){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
        .post(
            this.apiUrl, 
            JSON.stringify({ username }), 
            { headers }
            )
            .map(res => res.json())
            .map((res) => {
            if (res.success) {
                console.log("berhasil");
                console.log(res);
                localStorage.setItem('auth_token', res.auth_token);
                this._loggedIn = true;
            }else{
                console.log("gagal");
                console.log(res);
                console.log(res.success);
            }
            return res.success;
        });

    }

    logout(){
        localStorage.removeItem('auth_token');
        this._loggedIn = false;
    }

    isLoggedIn(){
        return this._loggedIn;
    }

}