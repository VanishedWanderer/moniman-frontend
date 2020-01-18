import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { PersonService } from './services/person.service';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moniman-frontend';

  constructor(
    private keyCloak: KeycloakService,
    private persons: PersonService
    ) {}

  user: Person = null;

  ngOnInit(): void {
    this.persons.getMe().subscribe((abb) => {
      this.user = abb;
    });
  }

  login() {
    this.keyCloak.login();
  }

  logout() {
    this.keyCloak.logout();
  }
}
