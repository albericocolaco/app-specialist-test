import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendLogComponent } from './send-log/send-log.component';
import { ViewLogComponent } from './view-log/view-log.component';
import { LogRoutingModule } from './log-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    SendLogComponent,
    ViewLogComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class LogModule { }
