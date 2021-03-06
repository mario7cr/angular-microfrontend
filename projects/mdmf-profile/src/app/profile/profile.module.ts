import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MdmfStylesModule, MdmfSharedModule } from 'mdmf-shared';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ListUserComponent } from './components/list-user/list-user.component';

@NgModule({
  declarations: [ProfileComponent, ListUserComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MdmfSharedModule,
    MdmfStylesModule,
  ],
  exports: [ListUserComponent],
})
export class ProfileModule {}
