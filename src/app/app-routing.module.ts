import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CopaIndiumComponent } from './pages/copa-indium/copa-indium.component';
import { LocationComponent } from './pages/location/location.component';
import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'copaIndium', component:CopaIndiumComponent},
  {path:'location', component:LocationComponent},
  {path:'more', component:MoreComponent},


  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"**", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
