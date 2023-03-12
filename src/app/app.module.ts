import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './public/component/navbar/navbar.component';
import { WelcomeComponent } from './public/component/welcome/welcome.component';
import { MoreinfoComponent } from './public/component/moreinfo/moreinfo.component';
import { UncommonwasteComponent } from './public/component/uncommonwaste/uncommonwaste.component';
import { BulletinComponent } from './public/component/bulletin/bulletin.component';
import { LocationComponent } from './public/component/location/location.component';
import { BiodataComponent } from './public/component/biodata/biodata.component';
import { ScheduleComponent } from './public/component/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    MoreinfoComponent,
    UncommonwasteComponent,
    BulletinComponent,
    LocationComponent,
    BiodataComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
