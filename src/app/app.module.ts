import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from "@angular/common/http";
import { BackendApiService } from "./backend-api.service";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdq378wOXer_bwr-lTyhFK2zc8P17cjLo'
    }),
    SocketIoModule.forRoot(config)
  ],
  providers: [BackendApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
