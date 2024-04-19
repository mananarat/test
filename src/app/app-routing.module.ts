import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/pages/main/main.component';
import { HotelDetailsComponent } from './views/pages/hotel-details/hotel-details.component';
import { RoomsComponent } from './views/pages/rooms/rooms.component';
import { RoomDetailComponent } from './views/pages/room-detail/room-detail.component';
import { HotelComponent } from './shared/components/hotel/hotel.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'hotels', component: MainComponent},
  {path:'hotelDetail/:id', component: HotelDetailsComponent},
  {path:'rooms', component: RoomsComponent},
  {path:'roomDetail/:id', component: RoomDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
