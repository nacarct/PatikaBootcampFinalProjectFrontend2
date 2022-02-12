import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PoliciesComponent} from "./components/policies/policies.component";

const routes: Routes = [{
  path: '',
  component: PoliciesComponent
},{
  path: 'Policies',
  component: PoliciesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
