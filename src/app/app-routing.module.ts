import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { DebtPageComponent } from './pages/debt/debt-page.component';
import {ReviewComponent} from './pages/review/review.component';


const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', component: EntryComponent },
  { path: 'debt/:meMode', component: DebtPageComponent },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
