import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetEstimatesPageRoutingModule } from './get-estimates-routing.module';

import { GetEstimatesPage } from './get-estimates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetEstimatesPageRoutingModule
  ],
  declarations: [GetEstimatesPage]
})
export class GetEstimatesPageModule {}
