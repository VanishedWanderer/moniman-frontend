import { Component, OnInit, ViewChild } from '@angular/core';
import { Debt } from 'src/app/models/debt';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { DebtService } from 'src/app/services/debt.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  ngOnInit(): void {
  }


  constructor(
  ) {}

}
