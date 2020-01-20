import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { IoweComponent } from './pages/iowe/iowe.component';
import { OwsmeComponent } from './pages/owsme/owsme.component';


const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', component: EntryComponent },
  { path: 'iowe', component: IoweComponent },
  { path: 'owsme', component: OwsmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
