import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamdetailPage } from './teamdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TeamdetailPage
  },
  {
    path: ':teamId',
    component: TeamdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamdetailPageRoutingModule {}
