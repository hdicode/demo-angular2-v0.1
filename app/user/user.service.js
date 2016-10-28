"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._loggedIn = false;
        this.apiUrl = 'http://jsonplaceholder.typicode.com/users';
        this._loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (username) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.apiUrl, JSON.stringify({ username: username }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                console.log("berhasil");
                console.log(res);
                localStorage.setItem('auth_token', res.auth_token);
                _this._loggedIn = true;
            }
            else {
                console.log("gagal");
                console.log(res);
                console.log(res.success);
            }
            return res.success;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this._loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this._loggedIn;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map