import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent implements OnInit{

data: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelsService
  ){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((res:any) => {
        let id = res["id"]
        this.hotelService.getHotelById(id).subscribe((result:any) => {
          this.data = result
          console.log(this.data);
        })
      })
  }

}
