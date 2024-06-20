import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CopaIndiumComponent } from './pages/copa-indium/copa-indium.component';
import { LocationComponent } from './pages/location/location.component';
import { MoreComponent } from './pages/more/more.component';
import { MushiMushiComponent } from './pages/mushi-mushi/mushi-mushi.component';
import { PaulanerFestComponent } from './pages/paulaner-fest/paulaner-fest.component';
import { OmcLiveComponent } from './pages/omc-live/omc-live.component';
import { BailemosComponent } from './pages/bailemos/bailemos.component';
import { FestivalEcuadorComponent } from './pages/festival-ecuador/festival-ecuador.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'copaIndium', component:CopaIndiumComponent},
  {path:'location', component:LocationComponent},
  {path:'more', component:MoreComponent},
  {path:'mushimushi', component:MushiMushiComponent},
  {path:'paulanerFest', component:PaulanerFestComponent},
  {path:'omcLive', component:OmcLiveComponent},
  {path:'bailemos', component:BailemosComponent},
  {path:'festivalEcuador', component:FestivalEcuadorComponent},




  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"**", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
