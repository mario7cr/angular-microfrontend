import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MdmfSharedModule } from 'projects/mdmf-shared/src/lib/modules/mdmf-shared.module';
import { NgxsModule } from '@ngxs/store';
import { APP_ROUTES } from './app.routes';

import { UserState } from 'mdmf-shared';

import { AppComponent } from './app.component';

import { MicrofrontendService } from './microfrontends/microfrontend.service';

export function initializeApp(
  mfService: MicrofrontendService
): () => Promise<void> {
  return () => mfService.initialise();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    NgxsModule.forRoot([UserState]),
    MdmfSharedModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
