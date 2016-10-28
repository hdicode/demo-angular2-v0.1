"use strict";
var router_1 = require("@angular/router");
var home_component_component_1 = require("./home-component.component");
var user_component_1 = require("./user/user.component");
var login_component_1 = require("./login/login.component");
var timelines_component_1 = require("./timeline/timelines.component");
var timelines2_component_1 = require("./timeline/timelines2.component");
var auth_guard_1 = require("./shared/auth.guard");
var APP_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'home', component: home_component_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'timeline', component: timelines_component_1.TimelinesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'timeline2', component: timelines2_component_1.Timelines2Component, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map