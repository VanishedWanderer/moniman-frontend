import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';
import { Debt } from 'src/app/models/debt';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-debtform',
  templateUrl: './debtform.component.html',
  styleUrls: ['./debtform.component.scss']
})
export class DebtformComponent implements OnInit {


  persons: Person[];
  person: Person;
  me: Person;
  amount: number;

  @Input()
  meIsDebitor: boolean;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.personService.findOthers().subscribe((others) => {
      this.persons = others;
    });
    this.personService.getMe().subscribe((me) => {
      this.me = me;
    });
  }

  getDebt(): Debt {
    if (this.meIsDebitor) {

    } else {

    }
  }


}
