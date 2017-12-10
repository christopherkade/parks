import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ParkComponent } from './park/park.component';
import { ParksService } from '../services/parks.service';
import { SortPipe } from '../pipes/sort.pipe';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParkComponent,
    SortPipe,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ParksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
