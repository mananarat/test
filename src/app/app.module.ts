import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/pages/main/main.component';
import { HotelDetailsComponent } from './views/pages/hotel-details/hotel-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelComponent } from './shared/components/hotel/hotel.component';
import { RoomsComponent } from './views/pages/rooms/rooms.component';
import { RoomComponent } from './shared/components/room/room.component';
import { RoomDetailComponent } from './views/pages/room-detail/room-detail.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HotelDetailsComponent,
    HotelComponent,
    RoomsComponent,
    RoomComponent,
    RoomDetailComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
