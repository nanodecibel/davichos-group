import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CopaIndiumComponent } from './pages/copa-indium/copa-indium.component';
import { LocationComponent } from './pages/location/location.component';
import { MoreComponent } from './pages/more/more.component';

@NgModule({ declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        HomeComponent,
        CopaIndiumComponent,
        LocationComponent,
        MoreComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
