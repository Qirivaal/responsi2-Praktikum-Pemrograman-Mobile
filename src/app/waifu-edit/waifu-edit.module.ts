import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaifuEditPageRoutingModule } from './waifu-edit-routing.module';

import { WaifuEditPage } from './waifu-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaifuEditPageRoutingModule
  ],
  declarations: [WaifuEditPage]
})
export class WaifuEditPageModule {}
