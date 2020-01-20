import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  @Input()
  person: Person;

  ngOnInit() {
  }

}
