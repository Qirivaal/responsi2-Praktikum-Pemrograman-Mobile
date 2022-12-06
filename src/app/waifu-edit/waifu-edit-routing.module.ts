import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaifuEditPage } from './waifu-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WaifuEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaifuEditPageRoutingModule {}
