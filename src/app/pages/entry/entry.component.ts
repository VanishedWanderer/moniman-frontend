import { Component, OnInit } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { DebtService } from 'src/app/services/debt.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  debt: Debt = {
    amount: 0,
    debtor: null,
    creditor: null
  };

  persons: Person[];

  constructor(
    private personsService: PersonService,
    private debtService: DebtService
  ) {}


  ngOnInit() {
    this.personsService.findAll().subscribe((persons) => {
      this.persons = persons;
    });
  }

  submit() {
    this.debtService.post(this.debt);
  }

}
