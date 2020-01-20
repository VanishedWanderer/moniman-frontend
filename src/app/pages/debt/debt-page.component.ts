import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import {PersonService} from '../../services/person.service';
import {Debt} from '../../models/debt';

@Component({
  selector: 'app-debt-page',
  templateUrl: './debt-page.component.html',
  styleUrls: ['./debt-page.component.scss']
})
export class DebtPageComponent implements OnInit {

  persons: Person[];
  person: Person;
  me: Person;
  amount: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  meMode: string = null;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.meMode = params.meMode;
    });
    this.personService.findOthers().subscribe((others) => {
      this.persons = others;
    });
    this.personService.getMe().subscribe((me) => {
      this.me = me;
    });
  }

  submit() {
    const debt = this.getDebt();
    this.router.navigateByUrl('/review', { state: {'debt': debt} });
  }

  getDebt(): Debt {
    if (this.meMode === 'debtor') {
      return {
        amount: this.amount,
        creditor: this.person,
        debtor: this.me
      };
    } else {
      return {
        amount: this.amount,
        debtor: this.person,
        creditor: this.me
      };
    }
  }

}
