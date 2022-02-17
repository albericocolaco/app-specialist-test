import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { SendLogComponent } from './send-log/send-log.component';
import { ViewLogComponent } from './view-log/view-log.component';

const routes: Routes = [
  {
    path: 'send',
    component: SendLogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view',
    component: ViewLogComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
