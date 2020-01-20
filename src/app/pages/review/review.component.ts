import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debt} from '../../models/debt';
import {DebtService} from '../../services/debt.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(
    private router: Router,
    private debtService: DebtService
  ) { }

  debt: Debt;

  ngOnInit() {
    // console.log(this.router.getCurrentNavigation().extras.state);
    if (!history.state.debt) {
      this.router.navigateByUrl('/');
    } else {
      this.debt = history.state.debt;
    }
  }

  submit() {
    this.debtService.post(this.debt).subscribe((result) => {
      console.log('Posted: ');
      console.log(result);
      this.router.navigateByUrl('/');
    });
  }

}
