import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShellRoutingModule } from './shell-routing.module';
import { MdmfSharedModule } from 'mdmf-shared';

import { HomeComponent } from './components/home/home.component';
import { FederatedComponent } from './components/federated/federated.component';

@NgModule({
  declarations: [HomeComponent, FederatedComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MdmfSharedModule,
  ]
})
export class ShellModule {}
