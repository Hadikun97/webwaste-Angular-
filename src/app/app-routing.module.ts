import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './public/component/welcome/welcome.component';
import { MoreinfoComponent } from './public/component/moreinfo/moreinfo.component';
import { UncommonwasteComponent } from './public/component/uncommonwaste/uncommonwaste.component';
import { BulletinComponent } from './public/component/bulletin/bulletin.component';
import { LocationComponent } from './public/component/location/location.component';
import { BiodataComponent } from './public/component/biodata/biodata.component';
import { ScheduleComponent } from './public/component/schedule/schedule.component';

const routes: Routes = [{
  path: '',
  component: WelcomeComponent
},{
  path: 'welcome',
  component: WelcomeComponent
},{
  path: 'moreinfo',
  component: MoreinfoComponent
},{
  path: 'uncommonwaste',
  component: UncommonwasteComponent
},{
  path: 'bulletin',
  component: BulletinComponent
},{
  path: 'location',
  component: LocationComponent
},{
  path: 'biodata',
  component: BiodataComponent
},{
  path: 'schedule',
  component: ScheduleComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }