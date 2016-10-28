import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  moduleId:  module.id,
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  providers: [AuthService]
})
export class AppComponent {
  constructor(private authService: AuthService){}

  isAuth(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout();
  }

}
