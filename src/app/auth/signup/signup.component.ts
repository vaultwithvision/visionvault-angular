import { Component } from '@angular/core';

import { userRoles } from '../auth.constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userRoles = userRoles.map(role => role.description);

}
