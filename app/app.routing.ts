import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { TimelinesComponent } from "./timeline/timelines.component";
import { Timelines2Component } from "./timeline/timelines2.component";
import { AuthGuard } from "./shared/auth.guard";

const APP_ROUTES: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'timeline', component: TimelinesComponent, canActivate: [AuthGuard] },
    { path: 'timeline2', component: Timelines2Component, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);