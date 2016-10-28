import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component.component';
import { LoginComponent } from "./login/login.component";
import { TimelinesComponent } from "./timeline/timelines.component";
import { Timelines2Component } from "./timeline/timelines2.component";

import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ 
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    TimelinesComponent,
    Timelines2Component ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, AuthGuard]
})
export class AppModule { }
