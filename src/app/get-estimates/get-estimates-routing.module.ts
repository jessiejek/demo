import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetEstimatesPage } from './get-estimates.page';

const routes: Routes = [
  {
    path: '',
    component: GetEstimatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetEstimatesPageRoutingModule {}
