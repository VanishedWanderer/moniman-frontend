import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { PersonService } from './services/person.service';

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

  user: any;

  ngOnInit(): void {
    this.keyCloak.loadUserProfile().then((token) => {
      this.user = token;
      console.log(this.user);
    });
    this.persons.getMe().subscribe((abb) => {
      console.log("ME")
      console.log(abb);
    });
  }
}
